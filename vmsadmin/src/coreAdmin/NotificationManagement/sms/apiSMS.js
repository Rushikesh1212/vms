import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const SMS = new Mongo.Collection('sms');

if(Meteor.isServer){

  Meteor.startup(() => {
    Notification._ensureIndex({ "toUserId": 1});
  });
  
  Meteor.publish('sms',function sms(){
      return SMS.find({});
  });
  
}

Meteor.methods({

  'insertSMS' : function(toUserId,smsBody,toNumber){
    var smsData = SMS.findOne({}, {sort: {smsId: -1}});

    if(smsData){
    smsId = smsData.smsId + 1;
    }else{
      smsId = 1;
    }

        Notification.insert({
          'smsId'      :smsId,
          'toUserId'   : toUserId,
          'smsBody'    : smsBody,
          'status'     : 'unread',
          'date'       : new Date(),
      });  
  },
  
  'updateSMS' : function(id){
    SMS.update(
              { "_id" : id },
              { $set: { "status"         : 'Read',  
                                
                       }  
              },
        );//end update 

  },

  'deleteSMS' : function(id){
    SMS.remove({"_id": id});

  }

});