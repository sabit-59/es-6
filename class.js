class Student {
    constructor (sId,sName,sSubject){
        this.id = sId;
        this.name =sName;
        this.Subject = sSubject;
        this.school = "zilla school";
    }
}

const student1 = new Student(10,'sabit','cse');
const student2 = new Student(11,'riad','eee');
const student3 = new Student(12,'hridoy','sexology');
const student4 = new Student(13, 'ahad','ete');

// console.log(student1.Subject,student2.Subject,student3.Subject,student4.Subject);
console.log(student1,student2,student3,student4);