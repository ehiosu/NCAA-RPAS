import {useState} from 'react';
let Navbar = ({open, isOpen, isClosed, close}) => {
    let show = () => {
        isOpen(!open);
        isClosed(!close);
        console.log(`clicked, open is ${open} `);
    }

    let [disp, setDisp] = useState(true);
    let [disp2, setDisp2] = useState(true);

    let isDisp = () => {
        setDisp(!disp);
    }

    let isDisp2 = () => {
        setDisp2(!disp2);
    }

    return (
        <div className={`navbar bg-green-400 flex justify-between items-center duration-300`}>
        <div className="flex items-center gap-2">
        <svg onClick={show} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 cursor-pointer">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
        <img src="/images/ncaa.png" className="w-20 xs:max-lg:w-14" alt="ncaa logo" />
        </div>

        <div className="flex gap-2">
        <svg onClick={isDisp} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 cursor-pointer">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        <div className={`${disp ? 'hidden' : 'block'} ${disp2 ? 'hidden' : null} border-2 border-black bg-blue-300 absolute top-16 right-12 w-60 p-6 space-y-2`}>
            <p>lorem</p>
            <p>lorem</p>
            <p>lorem</p><p>lorem</p>
            <p>lorem</p>
            <p>lorem</p>
        </div>

        <svg onClick={isDisp2} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 cursor-pointer">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        <div className={`${disp2 ? 'hidden' : 'block'} border-2 border-black bg-blue-300 absolute top-16 right-1 p-6 space-y-2`}>
            <p className='hover:bg-blue-100 cursor-pointer w-full'>Profile</p>
            <p className='hover:bg-blue-100 cursor-pointer'>Logout</p>
        </div>
        </div>
        </div>
    )
}

export default Navbar;