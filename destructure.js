const person = {name:'sabit',age:'17',job:'student',address:'bsmrstu',gfName:'dola',friends:['riad','hridoy']}

const {name,job,address,id,gfName}=person;

// const gfName =person.gfName;
// const address = person.address;

console.log(gfName,address,id,job);
console.log(gfName,address,id,job);

const friends = ['sabit','akash','riad','hridoy','ahad'];
const [first,second,...remain] = friends;
console.log(first,remain);

const complexObject = {
    name:'sabit',
    info:{
        time:'four',
        leader: 'none'
    }
}

const {time} = complexObject.info;
console.log(time);
