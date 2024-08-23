export default function SideBar(props) {
    const { handleToggleModal, data } = props;

    return (
        <div className="sideBar"> 
            <div onClick={ handleToggleModal } className="bgOverlay"></div>
            <div className="sidebarContents">

                <h2>{data?.title}</h2>
                <div className="descriptionContainer">
                    <p className="desriptionTitle">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={ handleToggleModal }>
                    <i className="fa-solid fa-arrow-right"></i> 
                </button>
            </div>
        </div>
    )
}