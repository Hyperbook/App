function ArcherCraftGithubLogin(){
var github = new Github({
  username: $( "input:text[name=username]" ).val();,
  password: $( "input:text[name=username]" ).val();,
  auth: "basic"
});
}
