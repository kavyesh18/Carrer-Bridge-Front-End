import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const dropdownData = [
    { title:"Job Title", icon: IconSearch, options:['Designer','Developer','Product Manager','Marketing Specialist',
    'Data Analyst','Sales Executive','Content Writer','Customer Support']},

    { title:"Location", icon:IconMapPin, options:['Delhi','New York','San Francisco','London',
        'Hyderabad','Chennai','Benguluru','Kochi'
    ] },

    { title:"Experience", icon:IconBriefcase, options:['Entry Level','Intermediate','Expert']},
    { title:"Job Type", icon:IconRecharging, options:['Full Time','Part Time', 'Contract','Freelance','Internship']}
];

const jobList = [
    {
        jobTitle:"Developer",
        company:"Accenture",
        applicants: 28,
        experience:"Entry-Level",
        jobType:"Full-Time",
        location:"Hyderabad",
        package:"10 LPA",
        postedDaysAgo:9,
        description:"Accenture is seeking a passionate and motivated Entry-Level Developer to join our dynamic team in Hyderabad. As a Developer, you will be involved in designing, coding, testing, and implementing software solutions that address our clients' business needs."
    },

    {
        jobTitle:"Product Manager",
        company:"Atlassian",
        applicants: 45,
        experience:"Mid-Senior-Level",
        jobType:"Full-Time",
        location:"New York",
        package:"40 LPA",
        postedDaysAgo:1,
        description:"Atlassian is looking for a skilled and strategic Product Manager to join our team in Hyderabad. As a Product Manager, you will play a pivotal role in shaping the direction of our products, driving innovation, and ensuring our solutions meet the evolving needs of our customers."
    },

    {
        jobTitle:"Sales Executive",
        company:"Capgemini",
        applicants: 120,
        experience:"Entry-Level",
        jobType:"Full-Time",
        location:"Benguluru",
        package:"3 LPA",
        postedDaysAgo:9,
        description:"Capgemini is looking for an enthusiastic and self-motivated Sales Executive to join our team in Bengaluru. As an Entry-Level Sales Executive, you will have the opportunity to kick-start your career in sales with a global leader in consulting and technology services."
    },

    {
        jobTitle:"Data Analyst",
        company:"Google",
        applicants: 15,
        experience:"Senior-Level",
        jobType:"Full-Time",
        location:"Remote",
        package:"32 LPA",
        postedDaysAgo:28,
        description:"Google is seeking an experienced and highly analytical Senior Data Analyst to join our team remotely. As a Senior Data Analyst, you will play a crucial role in transforming data into actionable insights, supporting strategic decision-making across various functions."
    },

    {
        jobTitle:"Front End Developer",
        company:"Microsoft",
        applicants: 34,
        experience:"Entry-Level",
        jobType:"Full-Time",
        location:"Chennai",
        package:"12 LPA",
        postedDaysAgo:6,
        description:"Microsoft is looking for a talented and enthusiastic Entry-Level Front End Developer to join our team in Chennai. As a Front End Developer, you will be responsible for creating visually appealing and user-friendly web applications that enhance the user experience."
    },

    {
        jobTitle:"Customer Support",
        company:"Mindtree",
        applicants: 90,
        experience:"Entry-Level",
        jobType:"Full-Time",
        location:"Kochi",
        package:"2 LPA",
        postedDaysAgo:3,
        description:"Mindtree is seeking a dedicated and customer-focused individual to join our team as a Customer Support Executive in Kochi. As an Entry-Level Customer Support Executive, you will be the first point of contact for our clients, providing exceptional service and resolving their queries efficiently."
    },

    {
        jobTitle:"Spring Boot Developer",
        company:"PayPal",
        applicants: 10,
        experience:"Senior-Level",
        jobType:"Full-Time",
        location:"Delhi",
        package:"45 LPA",
        postedDaysAgo:6,
        description:"PayPal is looking for an experienced and highly skilled Senior Spring Boot Developer to join our team in Delhi. As a Senior Spring Boot Developer, you will play a key role in designing, developing, and maintaining high-performance, scalable, and secure backend applications."
    },

    {
        jobTitle:".Net Developer",
        company:"S&P global",
        applicants: 33,
        experience:"Mid-Senior",
        jobType:"Full-Time",
        location:"Hyderabad",
        package:"25 LPA",
        postedDaysAgo:19,
        description:"S&P Global is seeking a talented and experienced Mid-Senior Level .Net Developer to join our dynamic team in Hyderabad. As a .Net Developer, you will be responsible for designing, developing, and maintaining innovative software solutions that support our business needs."
    }

];

export {dropdownData , jobList}