function ArcherCraftGithubLogin(){
var github = new Github({
  username: $( "input:text[name=username]" ).val();,
  password: "YOUR_PASSWORD",
  auth: "basic"
});
}
