/*
Copyright 2019 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from "react";
import PropTypes from "prop-types";

import sdk from "../../../index";
import {_t} from "../../../languageHandler";

const AvatarSetting = ({avatarUrl, avatarAltText, uploadAvatar, removeAvatar}) => {
    const AccessibleButton = sdk.getComponent('elements.AccessibleButton');

    let avatarElement = <div className="mx_AvatarSetting_avatarPlaceholder" />;
    if (avatarUrl) {
        avatarElement = <img src={avatarUrl} alt={avatarAltText} />;
    }

    let uploadAvatarBtn;
    if (uploadAvatar) {
        // insert an empty div to be the host for a css mask containing the upload.svg
        uploadAvatarBtn = <AccessibleButton onClick={uploadAvatar} kind="primary">
            <div>&nbsp;</div>
            {_t("Upload")}
        </AccessibleButton>;
    }

    let removeAvatarBtn;
    if (avatarUrl && removeAvatar) {
        removeAvatarBtn = <AccessibleButton onClick={removeAvatar} kind="link_sm">
            {_t("Remove")}
        </AccessibleButton>;
    }

    return <div className="mx_AvatarSetting_avatar">
        { avatarElement }
        { uploadAvatarBtn }
        { removeAvatarBtn }
    </div>;
};

AvatarSetting.propTypes = {
    avatarUrl: PropTypes.string,
    uploadAvatar: PropTypes.func,
    removeAvatar: PropTypes.func,
    avatarAltText: PropTypes.string.isRequired,
};

export default AvatarSetting;
