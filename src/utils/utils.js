export function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export function getOtpHtml(otp){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>OTP Verification</title>
    </head>
    <body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">

        <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
            <tr>
                <td align="center">

                    <table width="500" cellpadding="0" cellspacing="0" 
                        style="background:#ffffff; border-radius:12px; padding:40px; box-shadow:0 4px 12px rgba(0,0,0,0.1);">

                        <tr>
                            <td align="center">
                                <h1 style="color:#333333; margin-bottom:10px;">
                                    Email Verification
                                </h1>

                                <p style="color:#666666; font-size:16px; line-height:24px;">
                                    Use the OTP below to verify your email address.
                                </p>

                                <div style="
                                    margin:30px 0;
                                    background:#f1f5ff;
                                    padding:20px;
                                    border-radius:10px;
                                    display:inline-block;
                                ">
                                    <span style="
                                        font-size:32px;
                                        letter-spacing:8px;
                                        font-weight:bold;
                                        color:#3b82f6;
                                    ">
                                        ${otp}
                                    </span>
                                </div>

                                <p style="color:#888888; font-size:14px; line-height:22px;">
                                    This OTP is valid for 10 minutes.
                                </p>

                                <p style="color:#888888; font-size:14px; line-height:22px;">
                                    If you did not request this, please ignore this email.
                                </p>

                            </td>
                        </tr>

                    </table>

                </td>
            </tr>
        </table>

    </body>
    </html>
    `;
}


