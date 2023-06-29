function MainContainer(background ,content1, content2) {
    return (
        <div className="main-container"
            style={{
                backgroundImage: `url(${background})`,
                backgroundColor: `#B3B3B3`
            }}>            
            {content1}
            {content2}
        </div>        
    );
  }
  
  export default MainContainer;