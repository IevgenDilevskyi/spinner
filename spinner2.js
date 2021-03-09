const string = ['|', '/', '-','\\','|','\n'];
let time = 0;
for (const char of string){
  setTimeout(() => {
    process.stdout.write(char + '\r');
  }, time += 200);
}