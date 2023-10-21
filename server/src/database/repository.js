const getDb = require('./index');

exports.User = async function User() {
  const db = await getDb();
  const users = db.collection('users');
  /*
   * User has the following properties:
   * - Name (first, last)
   * - Email
   * - Phone
   * - Job title searching for
   * - Gihub username as Id
   * - Linkedin username
   * - Personal website url
   * - Twitter username
   * - Date of birth
   * - Nationality
   * - Country of residence
   * - Drivers license
   * - About me
   */
  const addUser = async (user) => {
    const result = await users.insertOne(user);
    return result;
  };

  const getUser = async (username) => {
    const result = await users.findOne({ username });
  };

  return { users, addUser, getUser };
};

function repository() {
  const db = getDb();
  const useEducation = db.collection('userEducation');
  const userExperience = db.collection('userExperience');
  const userSkills = db.collection('userSkills');
  const userProjects = db.collection('userProjects');
  const userInterests = db.collection('userInterests');
  const userLanguages = db.collection('userLanguages');
  const userAchievements = db.collection('userAchievements');
  const userCertifications = db.collection('userCertifications');
  const userPublications = db.collection('userPublications');
  const userVolunteer = db.collection('userVolunteer');
  const userReferences = db.collection('userReferences');
  const userAwards = db.collection('userAwards');
  const userCourses = db.collection('userCourses');
  const userPatents = db.collection('userPatents');

  const addUser = async (user) => {
    const result = await users.insertOne(user);
    return result;
  };

  const getUser = (username) => {};
  // remember that you can have mulitple About me per user
}
