class Student {
    constructor(name, age, gender, mail, phone, img) {
        this.name = name,
        this.age = age,
        this.gender = gender,
        this.mail = mail,
        this.phone = phone,
        this.img = img
    }
    info() {
        return `<tr>
                    <td>${this.name}</td>
                    <td>${this.age}</td>
                    <td>${this.gender}</td>
                    <td>${this.mail}</td>
                    <td>${this.phone}</td>
                    <td><img width='150px' src='${this.img}'></td>
                </tr>`
    }
}
let dat=new Student("Trương Đình Duy Đạt","25 tuổi","Nam","datluon25@gmail.com","0909027222","images/dat.png");
let phuoc=new Student("Nguyễn Văn Phước","26 tuổi","Chưa xác định","phuocluon26@gmail.com","0483384230","images/phuoc.jpg");
let binh=new Student("Cao Thanh Bình","25 tuổi","Nam","binhluonleo25@gmail.com","0751217712","images/binh.jpg");

let student = [dat,phuoc,binh];
// let result="<table border='1'><tr><th>Name</th><th>age</th><th>gender</th><th>mail</th><th>phone</th><th>img</th></tr>";
let result="<table border='1'><tr><th>Name</th><th>Age</th><th>Gender</th><th>Email</th><th>Phone</th><th>Img</th></tr>";
student.forEach(function(_student,index){
    result+=_student.info();
})
result+="</table>";
document.write(result);