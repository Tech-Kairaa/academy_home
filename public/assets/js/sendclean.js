(function () {
    var Settings, Messages, Account;
    var request = require('request');

    exports.SendClean = (function () {
        function SendClean(owner_id, apikey, appDomain, debug) {
            this.apikey = apikey != null ? apikey : null;
            this.owner_id = owner_id != null ? owner_id : null;
            this.url = 'https://api.' + appDomain + '/v1.0/';
            this.debug = debug != null ? debug : false;
            this.messages = new Messages(this);
            this.settings = new Settings(this);
            this.account = new Account(this);

        }

        SendClean.prototype.call = function (uri, params, onresult, onerror) {
            if (params == null) {
                params = {};
            }
            params.owner_id = this.owner_id;
            params.token = this.apikey;
            //console.log(params)
            request.post({url: this.url + uri, body: params, json: true}, function (err, httpResponse, body) {
                if (err) {
                    return onerror(err);
                }
                return onresult(body);
            });
        };

        SendClean.prototype.onerror = function (err) {
            throw {
                name: err.name,
                message: err.message,
                toString: function () {
                    return err.name + ": " + err.message;
                }
            };
        };

        return SendClean;

    })();


    Account = (function () {
        function Account(master) {
            this.master = master;
        }

        Account.prototype.viewUserDetail = function (params, onsuccess, onerror) {

            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }

            return this.master.call('account/viewUserDetail', params, onsuccess, onerror);
        };
        return Account;

    })();


    Settings = (function () {
        function Settings(master) {
            this.master = master;
        }

        Settings.prototype.listSmtp = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }

            return this.master.call('settings/listSmtp', params, onsuccess, onerror);
        };

        Settings.prototype.addSmtpUser = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('settings/addSmtpUser', params, onsuccess, onerror);
        };

        Settings.prototype.editSmtp = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('settings/editSmtp', params, onsuccess, onerror);
        };

        Settings.prototype.resetSmtpPassword = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('settings/resetSmtpPassword', params, onsuccess, onerror);
        };

        Settings.prototype.addSendingDomain = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('settings/addSendingDomain', params, onsuccess, onerror);
        };

        Settings.prototype.deleteSendingDomain = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('settings/deleteSendingDomain', params, onsuccess, onerror);
        };

        Settings.prototype.checkSendingDomain = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('settings/checkSendingDomain', params, onsuccess, onerror);
        };


        Settings.prototype.verifySendingDomain = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('settings/verifySendingDomain', params, onsuccess, onerror);
        };


        Settings.prototype.listSendingDomain = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('settings/listSendingDomain', params, onsuccess, onerror);
        };

        Settings.prototype.addTrackingDomain = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('settings/addTrackingDomain', params, onsuccess, onerror);
        };

        Settings.prototype.deleteTrackingDomain = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('settings/deleteTrackingDomain', params, onsuccess, onerror);
        };

        Settings.prototype.checkTrackingDomain = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('settings/checkTrackingDomain', params, onsuccess, onerror);
        };

        Settings.prototype.listTrackingDomain = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('settings/listTrackingDomain', params, onsuccess, onerror);
        };



        Settings.prototype.addWebhook = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('settings/addWebhook', params, onsuccess, onerror);
        };

        Settings.prototype.editWebhook = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('settings/editWebhook', params, onsuccess, onerror);
        };

        Settings.prototype.deleteWebhook = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('settings/deleteWebhook', params, onsuccess, onerror);
        };

        Settings.prototype.keyResetWebhook = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('settings/keyResetWebhook', params, onsuccess, onerror);
        };

        Settings.prototype.listWebhook = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('settings/listWebhook', params, onsuccess, onerror);
        };
        
        Settings.prototype.getWebhookInfo = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('settings/getWebhookInfo', params, onsuccess, onerror);
        };

        return Settings;

    })();

    Messages = (function () {
        function Messages(master) {
            this.master = master;
        }

        Messages.prototype.sendMail = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('messages/sendMail', params, onsuccess, onerror);
        };
        
        Messages.prototype.sendTemplate = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('messages/sendTemplate', params, onsuccess, onerror);
        };

        Messages.prototype.sendRaw = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('messages/sendRaw', params, onsuccess, onerror);
        };
        
        Messages.prototype.getMessageInfo = function (params, onsuccess, onerror) {
            if (params == null) {
                params = {};
            }
            if (typeof params === 'function') {
                onerror = onsuccess;
                onsuccess = params;
                params = {};
            }
            return this.master.call('messages/getMessageInfo', params, onsuccess, onerror);
        };

        return Messages;

    })();

}).call(this);


