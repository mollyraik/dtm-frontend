import { useState } from "react";

function AddProfile(props) {
  const [newProfile, setNewProfile] = useState({
    displayName: props.user.displayName,
    age: "",
    location: "",
    gender: "",
    interestedIn: "",
    bio: "",
    funFact: "",
    hobbies: [],
    photo: props.user.photoURL,
    uid: props.user.uid,
  });

  // handleChange for form
  const handleChange = (event) => {
    setNewProfile((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createProfile(newProfile);
    setNewProfile({
        displayName: props.user.displayName,
        age: "",
        location: "",
        gender: "",
        interestedIn: "",
        bio: "",
        funFact: "",
        hobbies: [],
        photo: "",
        uid: props.user.uid,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newProfile.displayName}
          name="displayName"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newProfile.photo}
          name="photo"
          placeholder="photo URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newProfile.age}
          name="age"
          placeholder="age"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newProfile.location}
          name="location"
          placeholder="location"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newProfile.gender}
          name="gender"
          placeholder="gender"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newProfile.interestedIn}
          name="interestedIn"
          placeholder="Looking to meet..."
          onChange={handleChange}
        />
        <input
          type="text"
          value={newProfile.bio}
          name="bio"
          placeholder="A little about me..."
          onChange={handleChange}
        />
        <input
          type="text"
          value={newProfile.funFact}
          name="funFact"
          placeholder="Fun fact about me..."
          onChange={handleChange}
        />
        <input
          type="text"
          value={newProfile.hobbies}
          name="hobbies"
          placeholder="please separate hobbies by a ',' "
          onChange={handleChange}
        />
        <input type="submit" value="Create Profile" />
      </form>
    </div>
  );
}

export default AddProfile;