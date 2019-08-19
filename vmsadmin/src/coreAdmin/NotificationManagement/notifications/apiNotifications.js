// import { Mongo } from 'meteor/mongo';
// import { Meteor } from 'meteor/meteor';

// export const Notification = new Mongo.Collection('notification');

// if(Meteor.isServer){

//   Meteor.startup(() => {
//     Notification._ensureIndex({ "toUserId": 1});
//   });
  
//   Meteor.publish('notification',function notification(){
//       return Notification.find({});
//   });
//   Meteor.publish('userNotification',function notification(id){
//       return Notification.find({'toUserId':id});
//   });

// }

// Meteor.methods({
//  'insertNotification' : function(eventName,toMailId,toUserId,notifBody){
        
//         var notifData = Notification.findOne({}, {sort: {notificationId: -1}});

//         if(notifData){
//         notificationId = notifData.notificationId + 1;
//         }else{
//           notificationId = 1;
//         }

//             Notification.insert({
//               'notificationId' :notificationId,
//               'event'          : eventName,
//               'toMailId'       : toMailId,
//               'toUserId'       : toUserId,
//               'notifBody'      : notifBody,
//               'status'         : 'unread',
//               'date'           : new Date(),
//           });

       
        
//       },

//   'updateNotification' : function(id){
//     Notification.update(
//               { "_id" : id },
//               { $set: { "status"         : 'Read',  
                                
//                        }  
//               },
//         );//end update 

//   },

//   'deleteNotification' : function(id){
//     Notification.remove({"_id": id});

//   },

// });