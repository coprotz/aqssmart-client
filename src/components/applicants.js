export const applicants = [
    { 
        id: '1', 
        firstname: 'Ally', 
        lastname: 'Mbaya',
        bio: 'speech, a ministers sermon, or even a business persons sales presentation may be similar in form to a lecture. Usually the lecturer will stand at the front of the room and recite information relevant to the lectures content.',
        age: '45',
        phone: '+255112233',
        location: '2555 - Kiwalani, Ilala, Dar es Salaam',
        gender: 'Male',
        email: 'mbaya@mbaya.com',
        education: 'Alevel',
        employment: 'Business',
        computer: 'Intermediate',
        english: 'Fluent',
        vacancy: 'Data Collection Freelancer',
        status: 'Submitted',
        contract: 'NA',
        signed_contract: '',
    },
    { 
        id: '2', 
        firstname: 'ACHI', 
        lastname: 'Mzuri',
        bio: 'I am very smart in my work and I prefer to work with smart people',
        age: '35',
        phone: '+25588669988',
        location: '4528 - Mbwei, Chunya, Mbeya',
        gender: 'Female',
        email: 'mzuri@mzuri.com',
        education: 'Bachelor',
        employment: 'Freelancer',
        computer: 'Advanced',
        english: 'Fluent',
        vacancy: 'Data Collection Freelancer',
        status: 'Approved',
        contract: 'http://localhost:3000/Contract.pdf',
        signed_contract: '',
    },

]

export const experiences = [
    { id: '1', 
        userid: '1',
        history: 
        [
            { 
                company: 'AlBarrru Inc', 
                position: 'Graphic Designer', 
                yearStart: 'June 2020', 
                yearEnd: 'July 2022' 
            },
            { 
                company: 'Wazo Graphics', 
                position: 'Designer', 
                yearStart: 'June 2020', 
                yearEnd: 'August 2021' 
            },
            { 
                company: 'Uniquants Ltd', 
                position: 'Graphic Designer', 
                yearStart: 'June 2020', 
                yearEnd: 'September 2022' 
            }
        ], 
    },
    { id: '2', 
        userid: '2',
        history: 
        [
            { 
                company: 'AlBarrru Inc', 
                position: 'Graphic Designer', 
                yearStart: 'June 2020', 
                yearEnd: 'July 2022' 
            },
            { 
                company: 'Wazo Graphics', 
                position: 'Designer', 
                yearStart: 'June 2020', 
                yearEnd: 'August 2021' 
            },
         
        ], 
    },

]

export const userSkills = [
    { userid: '1', skills: [ 'Adaptability', 'Attention to detail', 'Collaboration', 'Creativity' ] },
    { userid: '2', skills: [ 'Decision making', 'Empathy', 'Communication', 'Customer Services', 'Leadership', 'Multitasking' ] },
]

export const userCerts = [
    { 
        userid: '1', 
        certs: [
            { yearStart: 'June 2001', yearEnd: 'March 2001', college: 'Mbeya University', certName: 'Master In Computer' },
            { yearStart: 'June 2001', yearEnd: 'March 2001', college: 'Mbeya University', certName: 'Master In Computer' },
            { yearStart: 'June 2001', yearEnd: 'March 2001', college: 'Mbeya University', certName: 'Master In Computer' },
            { yearStart: 'June 2001', yearEnd: 'March 2001', college: 'Mbeya University', certName: 'Master In Computer' },

        ] 
    },
    { 
        userid: '2', 
        certs: [
            { yearStart: 'June 2001', yearEnd: 'March 2001', college: 'Mbeya University', certName: 'Master In Computer' },
            { yearStart: 'June 2001', yearEnd: 'March 2001', college: 'Mbeya University', certName: 'Master In Computer' },
            { yearStart: 'June 2001', yearEnd: 'March 2001', college: 'Mbeya University', certName: 'Master In Computer' },
        ] 
    }
]