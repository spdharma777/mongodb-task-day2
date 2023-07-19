use("zenclass_db");

//db.topics.find();

// 1.Find all the topics and tasks which are thought in the month of October
// db.topics.aggregate([
//   { $match: { date: "new Date(2020-10-15)" } },
//   { $project: { _id: 0, topic_name: 1, tasks: 1, date: 1 } },
// ]);

// 2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
//db.company_drives.find();-for checking

//db.company_drives.find({date:{$gt:"new Date(2020-10-15)",$lt:"new Date(2020-10-31)"}})

// 3.Find all the company drives and students who are appeared for the placement.
//db.company_drives.find();
// db.company_drives.aggregate([
//   {
//     $lookup: {
//       from: "users",
//       localField: "userId",
//       foreignField: "userId",
//       as: "placement",
//     },
//   },
// ]);

// 4.Find the number of problems solved by the user in codekata

//db.codekata.find();
// db.codekata.aggregate([
//   {
//     $lookup: {
//       from: "users",
//       localField: "userId",
//       foreignField: "userId",
//       as: "user_details",
//     }
//   },
//   {$project: {
//     'name':'$user_details.name',
//     'problem_solved':'$problemSolved',
//   }},
// ]);

//5. Find all the mentors with who has the mentee's count more than 15
// db.mentors.aggregate([
//   {
//     $lookup: {
//       from: "users",
//       localField: "mentor_id",
//       foreignField: "userId",
//       as: "mentor_details",
//     }
//   },{$project:
// {
//     'mentor_name':'$mentor_details.name',
//     'mentees_count':{$size: '$mentee_ids'}
// }},
// {$match:{'mentee_ids':{$gte:15}}}
// ]);

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
// db.attendance.find();

// db.tasks.aggregate([
//   { $match: { task: "not_submitted" } },
//   //{ $project: { task_id: 0, task_name:1, date:1,submission_date:0,tasks: 1, status: 1 } },
// ]);
