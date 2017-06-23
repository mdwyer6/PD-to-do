var React = require('react');
module.exports = function() {
    return <div className="pd">
        <span>
            <style dangerouslySetInnerHTML={{__html: "\n\
                * {\n\
                    box-sizing: border-box;\n\
                }\n\
                \n\
                body {\n\
                    margin: 0;\n\
                }\n\
                \n\
                button:hover {\n\
                    cursor: pointer;\n\
                }\n\
                \n\
                a {\n\
                    text-decoration: none;\n\
                    color: inherit;\n\
                }\n\
                \n\
                .pd-todoinput-9 {\n\
                  width: 314px;\n\
                  height: 40px;\n\
                  flex-shrink: 0;\n\
                  border-radius: 4px;\n\
                  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\
                  color: #000;\n\
                  font-size: 23px;\n\
                  padding: 6px 12px;\n\
                  border: 1px solid #cccccc;\n\
                }\n\
                \n\
                .pd-add-1 {\n\
                  width: 40px;\n\
                  height: 40px;\n\
                  flex-shrink: 0;\n\
                  margin-left: 10px;\n\
                  border-radius: 4px;\n\
                  background: #337ab7;\n\
                  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\
                  color: #fff;\n\
                  font-size: 25px;\n\
                  font-weight: normal;\n\
                  font-style: normal;\n\
                  text-decoration: none;\n\
                  text-align: center;\n\
                  word-wrap: break-word;\n\
                  border: none;\n\
                }\n\
                \n\
                .pd-0-0-0 {\n\
                  display: flex;\n\
                  flex-direction: row;\n\
                  align-items: flex-start;\n\
                  flex-shrink: 0;\n\
                  padding-left: 135px;\n\
                  padding-right: 201px;\n\
                }\n\
                \n\
                .pd-todolistitem-2 {\n\
                  width: 364px;\n\
                  flex-shrink: 0;\n\
                  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\
                  color: #000000;\n\
                  font-size: 14px;\n\
                  font-weight: normal;\n\
                  font-style: normal;\n\
                  text-decoration: none;\n\
                  text-align: left;\n\
                  word-wrap: break-word;\n\
                  min-height: 26px;\n\
                }\n\
                \n\
                .pd-layout-6 {\n\
                  display: flex;\n\
                  flex-direction: row;\n\
                  flex-shrink: 0;\n\
                  padding-top: 14px;\n\
                  padding-bottom: 14px;\n\
                  background: #D8D8D8;\n\
                  width: 100%;\n\
                  align-items: flex-start;\n\
                  padding-left: 12px;\n\
                  padding-right: 19px;\n\
                }\n\
                \n\
                .pd-0-0-1-0-0-0 {\n\
                  width: 100%;\n\
                }\n\
                \n\
                .pd-0-0-1 {\n\
                  display: flex;\n\
                  flex-direction: row;\n\
                  align-items: flex-start;\n\
                  flex-shrink: 0;\n\
                  margin-top: 26px;\n\
                  padding-left: 123px;\n\
                  padding-right: 182px;\n\
                }\n\
                \n\
                .pd-0-0 {\n\
                  display: flex;\n\
                  flex-direction: column;\n\
                  flex-shrink: 0;\n\
                  padding-top: 52px;\n\
                  padding-bottom: 0px;\n\
                }\n\
                \n\
                .pd-artboard-8 {\n\
                  display: flex;\n\
                  flex-direction: column;\n\
                  padding-top: 0px;\n\
                  padding-bottom: 228px;\n\
                  background: rgb(241, 234, 234);\n\
                  min-height: 100vh;\n\
                }\n\
                \n\
                \n\
                "}}/>
        </span>
        <div className="pd-artboard-8">
            <div className="pd-0-0">
                <div className="pd-0-0-0">
                    <input className="pd-todoinput-9" placeholder="Enter to do item" type="text" name="::current" valueLink={this.linkState('current')}></input>
                    <button className="pd-add-1" type="submit" onClick={this.handleClick.bind(this)}>
                        <span className="pd-0-0-0-1-0">+</span>
                    </button>
                </div>
                <div className="pd-0-0-1">
                    <div className="pd-0-0-1-0">
                        { this.state.items.map((item) => {
                            return <div className="pd-0-0-1-0-0-0">
                                <div className="pd-layout-6">
                                    <div className="pd-todolistitem-2">{ item }</div>
                                </div>
                            </div>;
                        }) }
                    </div>
                </div>
            </div>
        </div>
    </div>;
};