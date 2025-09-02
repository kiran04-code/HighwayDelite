import nodemailer from "nodemailer";


export const SendMailToUser = async (email: string, otp: number) => {
    try {
        const traspoter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            secure: true,
            port: 465,
            auth: {
                user: process.env.EMAIL,       // Your Gmail address
                pass: process.env.EMAIL_PASS,
            }
        })
        const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Email Verification OTP</title>
</head>
<body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#ebf8ff;">

  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" style="padding: 30px 20px;">
        
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color:white; border-radius:12px; box-shadow:0 4px 8px rgba(0,0,0,0.1); overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td align="center" style="background-color:#3b82f6; padding:20px; color:white; font-size:24px; font-weight:bold;">
              🔒 Email Verification
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px; text-align:center; color:#1e3a8a;">
              <h2 style="margin-bottom:10px; font-size:22px;">Your OTP Code</h2>
              <p style="font-size:16px; color:#374151;">Use the following One Time Password (OTP) to complete your verification process. The code is valid for <strong>5 minutes</strong>.</p>
              
              <div style="margin:30px 0; font-size:28px; font-weight:bold; letter-spacing:6px; color:#1e40af;">
                ${otp}
              </div>

              <p style="font-size:14px; color:#6b7280;">If you didn’t request this, you can safely ignore this email.</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="background-color:#eff6ff; padding:15px; font-size:12px; color:#6b7280;">
              © 2025 Your Company. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`
        const info = traspoter.sendMail({
            from: `HD<${process.env.EMAIL}>`,
            to: email,
            subject: "Your One-Time Password (OTP)",
            html,
        })
        return info
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send email");
    }
}