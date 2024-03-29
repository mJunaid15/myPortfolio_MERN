import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter Email"],
  },
  password: {
    type: String,
    select: false,
    required: [true, "Please enter password"],
  },

  timeline: [
    {
      title: String,
      description: String,
      date: Date,
    },
  ],
  skills: {
    image1: {
      public_id: String,
      url: String,
    },

    image2: {
      public_id: String,
      url: String,
    },
    image3: {
      public_id: String,
      url: String,
    },
    image4: {
      public_id: String,
      url: String,
    },
    image5: {
      public_id: String,
      url: String,
    },
    image6: {
      public_id: String,
      url: String,
    },
  },
  project:[
      {
          url:String,
          title:String,
          image:{
              public_id:String,
              url:String,
          },
          description:String,
          techStack:String,
      }
  ],
  about:{
      name:String,
      title:String,
      subTitle:String,
      description:String,
      quote:String,
      avatar:{
          public_id:String,
          url:String
      },
  }
});

export const User = mongoose.model("User", userSchema);