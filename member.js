function skillsMember() {
    let member = {
        name: 'John',
        age: 30,
        skills: ['JS', 'React', 'Node'],
        // Method
        showName: function () {
            console.log(this.name);
        },
        // Method
        showSkills: function () {
            this.skills.forEach((skill) => console.log(skill));
        }
    };
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    member.showName();
    member.showSkills();
}