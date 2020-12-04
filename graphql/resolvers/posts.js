const Post = require('../../models/Post');

module.exports = {
     Query:{
         async getPosts(){
             try{
                 const posts = await posts.find();
                 return posts;
             } catch (err){
                 throw new Error(err);
             }
         }
     }
}