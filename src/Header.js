// header
function Header() {
  return (
    <>
      <div className="head_top">
        <div className="ht_wrap">
          <div className="h_logo">
            <div className="h_logo_img"></div>
          </div>
          <div className="h_search">
            <form className="h_search_box">
              <input
                type="text"
                className="h_input_text"
                placeholder="검색어를 입력해주세요"
              ></input>
              <div className="h_input_image"></div>
            </form>
          </div>
          <div className="h_memberlogin">
            <ul className="h_login_menu">
              <li>로그인</li>
              <li>회원가입</li>
              <li>마이페이지</li>
              <li>장바구니</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="head_bottom">
        <div className="hb_wrap">
          <div className="h_category">
              <li>
                <a href="#"><span>NEW RELEASES</span></a>
              </li>
              <li>
                <a href="#"><span>MEN</span></a>
              </li>
              <li>
                <a href="#"><span>WOMEN</span></a>
              </li>
              <li>
                <a href="#"><span>UNISEX</span></a>
              </li>
            
          </div>
          <div className="h_right_box">
            <li>
              <a href="#"><span>OUTLET</span></a>
            </li>
            <li>
              <a href="#"><span>EVENT</span></a>
            </li>
            <li>
              <a href="#"><span>LOOKBOOK</span></a>
            </li>
            <li>
              <a href="#"><span>THANKS, ARCHIVE</span></a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
