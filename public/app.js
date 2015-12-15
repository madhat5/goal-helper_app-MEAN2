// TEST
// console.log('Sim Sim Salabim');


// TEMP STUFF ///////////////////////////////////
// angular.module('MyPosts', []).directive('ngmyposts', function(){

//   return {

//     controllerAs: 'my',
//     controller: ['$http', function PostCtrl($http){

//       this.$http = $http;
//       this.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
//       var self = this;
//       self.posts = [];
//       self.totalPosts = 0;

//       // >>? explain what this does...(dynamic)
//       this.totalPosts = function() {
//         return self.posts.length;
//       };

//       // All posts
//       this.getPosts = function(){

//         console.log('...Gathering all posts...');
//         self.$http.get('/posts').then(function(res){
//             // console.log(res);
//             // console.log(res.data);
//             self.posts = res.data;
//         });

//         return self.posts;
//       };
//       this.getPosts();

//       // Create/Add post
//       this.addPost = function(){

//         self.$http.post('/posts', {comment: this.formPostComment, author: this.formPostAuthor}).then(function success(res){
//             console.log(res.data);
//             self.posts.push(res.data);
//             self.formPostComment = '';
//             self.formPostAuthor = '';
//           }, function error(){
//             console.log('...ERROR...');
//         });
//       };

//       // Edit post
//       this.populateForm = function(post){
//         self.formPostId = post._id;
//         self.formPostComment = post.comment;
//         self.formPostAuthor = post.author;
//       };

//       this.editPost = function(){
//         var id = this.formPostId;
//         self.$http.put('/posts/' + id, {comment: this.formPostComment, author: this.formPostAuthor}).then(function success(res){
//             console.log(res);
//             self.getPosts();

//             self.formPostId = '';
//             self.formPostComment = '';
//             self.formPostAuthor = '';
//           }, function error(){
//             console.log('...ERROR...');
//         });
//       };

//       // Delete post
//       this.deletePost = function(post){
//         var id = post._id;
//         self.$http.delete('/posts/' + id).then(function success (res){
//             console.log(res);
//             self.getPosts();
//           }, function error(){
//             console.log('...ERROR...')
//         });
//       };

//     }] // close of controller
//   }; // close of return object
// }); // close of angular.module

// // NOTES

// // Explain:
// // - formPostComment
// // - formPostAuthor

