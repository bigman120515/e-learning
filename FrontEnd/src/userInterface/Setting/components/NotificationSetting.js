import React from 'react'

export const NotificationSetting = () => {
  return (
    <>
        <div class="tab-pane fade" id="nav-setting-tab-2">
                            {/* <!-- Notification START --> */}
                            <div class="card">
                                {/* <!-- Card header START --> */}
                                <div class="card-header border-0 pb-0">
                                    <h5 class="card-title mb-0">Notification</h5>

                                </div>
                                {/* <!-- Card header START --> */}
                                {/* <!-- Card body START --> */}
                                <div class="card-body pb-0">
                                    {/* <!-- Notification START --> */}
                                    <ul class="list-group list-group-flush">
                                        {/* <!-- Notification list item --> */}
                                        <li
                                            class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                            <div class="me-2">
                                                <h6 class="mb-0">Likes and Comments</h6>

                                            </div>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch"
                                                    id="NotiSwitchCheckChecked" checked/>
                                            </div>
                                        </li>
                                        {/* <!-- Notification list item --> */}
                                        <li
                                            class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                            <div class="me-2">
                                                <h6 class="mb-0">Subscription/ Bookings</h6>

                                            </div>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch"
                                                    id="NotiSwitchCheckChecked2" checked/>
                                            </div>
                                        </li>
                                        {/* <!-- Notification list item --> */}
                                        <li
                                            class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                            <div class="me-2">
                                                <h6 class="mb-0">Email Notification</h6>

                                            </div>
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch"
                                                    id="NotiSwitchCheckChecked3"/>
                                            </div>
                                        </li>
                                        {/* <!-- Notification list item --> */}
                                        <li
                                            class="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                            <div class="me-2">
                                                <h6 class="mb-0">Push Notification</h6>

                                            </div>

                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch"
                                                    id="NotiSwitchCheckChecked4"/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- Notification END --> */}
                        </div>
    </>
  )
}
