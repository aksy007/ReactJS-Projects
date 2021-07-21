import React from 'react'

const Header = ()=> {
    return (
        <div className="header">
            <div className="header-content">
                <div className="tab-btns">
                    <button className="active">BUY</button>
                    <button>Rent/PG</button>
                    <button>PROJECTS</button>
                    <button>COMMERCIAL</button>
                    <button>DEALERS</button>
                </div>
                <div className="search-tab">
                    <form>
                        <input type="text"
                            placeholder=" Search Courses"
                            name="search" />
                        <button>
                            <i className="fa fa-search" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header
