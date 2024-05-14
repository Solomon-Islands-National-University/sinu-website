interface MegamenuContainerProps {
    children: React.ReactNode,
}

const MegamenuContainer: React.FC<MegamenuContainerProps> = (props) => {
    return ( 
        <div className="absolute   z-40 mt-10 ">
            {/* <div className="px-0 lg:px-28"> */}
            {props.children}
            {/* </div> */}
        </div>
     );
}

export default MegamenuContainer;