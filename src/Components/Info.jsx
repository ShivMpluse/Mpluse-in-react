import styled from "styled-components";

const Info = () => {
    const fintechDetails = [
        {
            id: 1,
            title: "Expertise and Experience",
            gradient: "from-yellow-400 via-fuchsia-400 to-blue-500",
            items: [
                "10+ years of experience in medical admissions and counseling.",
                "A team of seasoned professionals with in-depth knowledge of the fintech industry and its evolving landscape.",
            ],
        },
        {
            id: 2,
            title: "Innovative Solutions",
            gradient: "from-green-400 via-purple-400 to-pink-500",
            items: [
                "Pioneering technology-driven solutions for financial institutions.",
                "Extensive expertise in developing fintech applications tailored to client needs.",
            ],
        },
        {
            id: 3,
            title: "Client-Centric Approach",
            gradient: "from-red-400 via-yellow-400 to-teal-500",
            items: [
                "Commitment to delivering personalized and efficient financial services.",
                "Strong focus on understanding and exceeding client expectations.",
            ],
        },
    ];

    return (
        <div className="content text-black items-center">
            {fintechDetails.map(({ id, title, gradient, items }) => (
                <div key={id} className="mb-6 mt-16 ">
                    <h2 className={`text-4xl text-transparent bg-gradient-to-r ${gradient} bg-clip-text mb-2 font poppins-medium`}>
                        {title}
                    </h2>
                    <ul className="list-disc pl-5">
                        {items.map((item, index) => (
                            <Li key={index} className="text-black mt-2">{item}</Li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Info;

const Li = styled.li`
    font-size: 16px;
    font-weight: 400;
    color: black;
    font-family: 'Poppins', sans-serif;
`