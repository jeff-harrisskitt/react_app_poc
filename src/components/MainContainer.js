function MainContainer(background ,content1, content2) {
    return (
        <div className="main-container"
            style={{
                backgroundImage: `url(${background})`,
                backgroundColor: `#5B5B5B`
            }}>            
            {content1}
            {content2}
        </div>        
    );
  }
  
  export default MainContainer;