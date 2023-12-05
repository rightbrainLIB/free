const ExportHtmlCode = (imagePath: string) => {
  const getExportHtml = () => {
    return `
      <!DOCTYPE  html  PUBLIC  "-//W3C//DTD XHTML 1.0 Transitional//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html  xmlns="http://www.w3.org/1999/xhtml">
          <head>
              <meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
              <meta name="viewport" content="width=660" />
              <title>뉴스레터</title>
          </head>
          <body style="margin:0;padding:0;">
              <table width="680"  align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                  <tr>
                      <td  align="center">
                          <table width="660" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                          <!--header-->
                              <tr>
                                  <td style="vertical-align:top;">
                                      <img src="https://lh3.googleusercontent.com/pw/ADCreHfYu107dROni41fDN71XqinJG4OSr2BQlZWCDpNIMC8eiqT6IA5f8295lP-A5TyoY0dgxbrGRDnLBIW6qbKLdYD9Ax3PD-2x3A7bLSxOGqoYiFSU_iz1C6-fWJ_JZy4LxXMvHa6ucHH1-9puFJTums=w659-h28-s-no-gm?authuser=2" width="660" height="28" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <!-- head1// -->
                                      <table width="660" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                          <tr>
                                              <td style="vertical-align:top;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHcSSJH1pOVr29DPeW2JrBFWEkVIMjZ0YqRJmjVYD7g8K-ky60PmfSm1PaPHb916mgjhq5s5-3dFQbhgTxlhKp5RfcYzwhA4ryFCVmOEqLGnpfZj9RC3Pr68D1GCbTdKPvZz2znMbRYE1OVvQYyon2M=w27-h25-s-no-gm?authuser=2" width="27" height="25" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <a href="https://www.rightbrain.co.kr" target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHfBTspu1HOWs-VnKmuYfnmDMq58faVzxMt9IF0ixeRypjq0VV7ugDoTrIdGPN4P8vTqCwBK0GQ4t35mNESOlTguF0hfkYz0UZSDB5fY_IL6485cb5VAlRk31q1zE5KGVzDwSdeDbh2gYULWF-PzjqM=w95-h25-s-no-gm?authuser=2" width="95" height="25" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHcSSJH1pOVr29DPeW2JrBFWEkVIMjZ0YqRJmjVYD7g8K-ky60PmfSm1PaPHb916mgjhq5s5-3dFQbhgTxlhKp5RfcYzwhA4ryFCVmOEqLGnpfZj9RC3Pr68D1GCbTdKPvZz2znMbRYE1OVvQYyon2M=w27-h25-s-no-gm?authuser=2" width="35" height="25" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <a href="mailto:support@rightbrain.co.kr" target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHfD1-r9-8B2wD5Aei_bI0Q-ycX_ypCdGrMSdcREyduRtP4YSbxgUIYTz8HfRyTrGYx4l5AfEgArPfXGKgqPNO2625i1j9kpYpfdjNrNtZLK6772AtK3E_GFttmylCdBcTwMQdKOvWFoI-sIsI4E8GQ=w76-h25-s-no-gm?authuser=2" width="76" height="25" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHc8Skjx2NrbikVldsc57KTeOS7tbO4zQw9zbrB5Ka80HLciKgIIBJr49m1NkcSiiPcip-Q0vkKuu58ivLMYwXJ0NEWg6HiyEgoD0vcM8ZISdOT6Ldj5G8Tr9LUZmX0tLNi2rTTzu-Of3FjuWeyO1YY=w307-h25-s-no-gm?authuser=2" width="307" height="25" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <a href="https://www.rightbrain.co.kr" target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHfdqjWoBaBBUCd9NPlX5wwXEg35vrp8bZU2BWpkWBUtU8TIdlWGj5q4TbL6VbsuTmq0v2mOvJEvupMwkfARH4o9njAQ0IV61kXeCHEzxaA6HwEqmA07ajuLU8lfolmP2eVrRGor3OCky5MDexWRZ9o=w95-h25-s-no-gm?authuser=2" width="96" height="25" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHcSSJH1pOVr29DPeW2JrBFWEkVIMjZ0YqRJmjVYD7g8K-ky60PmfSm1PaPHb916mgjhq5s5-3dFQbhgTxlhKp5RfcYzwhA4ryFCVmOEqLGnpfZj9RC3Pr68D1GCbTdKPvZz2znMbRYE1OVvQYyon2M=w27-h25-s-no-gm?authuser=2" width="24" height="25" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                          </tr>
                                      
                                      </table>
                                      <!-- //head1 -->
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <img src="https://lh3.googleusercontent.com/pw/ADCreHfYu107dROni41fDN71XqinJG4OSr2BQlZWCDpNIMC8eiqT6IA5f8295lP-A5TyoY0dgxbrGRDnLBIW6qbKLdYD9Ax3PD-2x3A7bLSxOGqoYiFSU_iz1C6-fWJ_JZy4LxXMvHa6ucHH1-9puFJTums=w659-h28-s-no-gm?authuser=2" width="660" height="66" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <!-- head2// -->
                                      <table width="660" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                          <tr>
                                              <td style="vertical-align:top;" >
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHc4wcwcjN7Wsfg80vo0fkXRmbwcrXd1Berg2ovmm4EDF7ggps8hn6CrFFRSzELWlg1VhrWTIty6YxvsPvdzxWaJSbrYw4PwuNA7uVItvExhoPisFvax6mkjF_2Rz7fGzieb3FWhF8Mv7tmO2KiMa30=w600-h222-s-no-gm?authuser=2" width="600" height="222" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <img src="${imagePath}" width="60" height="222" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                              <!--//header-->
                          </table>
                      </td>
                  </tr>
                  <tr>
                      <td style="vertical-align:top;">
                          <!-- footer// -->
                          <table width="660" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                              <tr>
                                  <td style="vertical-align:top;">
                                      <img src="https://lh3.googleusercontent.com/pw/ADCreHchjH6KWyoWfNkssJrSf0aL-ekiy5vE9vGpvyzCnlX63Uy4muBRpX1PZlasiDvkorV1gxseOEG8pDe7k1dZk45vQqbtjZ5oZPTtA0TA_bEl_-7TNqBQ7cnM_Z74-O8cF2ixclepdfK1JZnmQZEDMKE=w402-h27-s-no-gm?authuser=2" width="660" height="71" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <img src="https://lh3.googleusercontent.com/pw/ADCreHeV8-hk-G4dd1vQTWcjn5wpXR582b4jiq61zZyIoTni5_o0oFCMixyzHRGSRxH1Ynu9y8CW7neo3Z7jOZdvOZqdjHKncjkrI1aUJwxn66Q7CgNq3S6xYKdYXEhQnjwYLjs98CZcCZ-6a_yJI9hZ_gE=w658-h71-s-no-gm?authuser=2" width="660" height="71" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <table width="660" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                          <tr>
                                              <td style="vertical-align:top;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeGFiQLFUtkn2zuLFfrS_P_Vps7CDmobvFwczHp1M5k_0L_NcaPTLYdy7iQkqUhHWoRI1MYkFThl0wNrcnWcNyeka1ztTNzem6AKJLGUCtMf2Dt_Srd7mLpElvz0w22zwbZnYxaCn9S2oBojCsaHeIy=w26-h40-s-no-gm?authuser=1" width="26" height="27" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <a href="mailto:support@rightbrain.co.kr" target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHcsqFWti0e9kvQ2jcXsejnwhR8sKhTXPka8QG70qE0liApmllBziR041CqVqQcybmm9WSyIDob2qldnDLygZ74JEW1PBS_RlX8V14aAbti4uwO5nZQxGCtPXe10F1pjqcOjTKYbHnA_D-H6UlnVBWk=w229-h27-s-no-gm?authuser=2" width="229" height="27" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHchjH6KWyoWfNkssJrSf0aL-ekiy5vE9vGpvyzCnlX63Uy4muBRpX1PZlasiDvkorV1gxseOEG8pDe7k1dZk45vQqbtjZ5oZPTtA0TA_bEl_-7TNqBQ7cnM_Z74-O8cF2ixclepdfK1JZnmQZEDMKE=w402-h27-s-no-gm?authuser=2" width="405" height="27" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <img src="https://lh3.googleusercontent.com/pw/ADCreHchjH6KWyoWfNkssJrSf0aL-ekiy5vE9vGpvyzCnlX63Uy4muBRpX1PZlasiDvkorV1gxseOEG8pDe7k1dZk45vQqbtjZ5oZPTtA0TA_bEl_-7TNqBQ7cnM_Z74-O8cF2ixclepdfK1JZnmQZEDMKE=w402-h27-s-no-gm?authuser=2" width="660" height="48" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <table width="660" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                          <tr>
                                              <td style="vertical-align:top;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeGFiQLFUtkn2zuLFfrS_P_Vps7CDmobvFwczHp1M5k_0L_NcaPTLYdy7iQkqUhHWoRI1MYkFThl0wNrcnWcNyeka1ztTNzem6AKJLGUCtMf2Dt_Srd7mLpElvz0w22zwbZnYxaCn9S2oBojCsaHeIy=w26-h40-s-no-gm?authuser=1" width="30" height="71" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <a href="mailto:support@rightbrain.co.kr" target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHdnaYyM7iVKApgSLG1kCkEWeDXUFjIF3hn6fMbc-Sz9TGH61HgVRG-MKwUOcJp7qzd2c7q2CgxmpxX-s94iu9OBuWVxB3Z6yrkc-ISzIfOOBP-FoPQmH1-up_dnfZVcp6G6rQkff3Qc1qsDkVcoarA=w150-h71-s-no-gm?authuser=2" width="150" height="71" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeF-mmWK8lBy7qifWLzAYf6IPiQLVBl69LfBEfCeXEc2vEhbZ_7Jb68Tsgch08VoNaSuPsrFuSNDI0wgKvKFVTwyzhWL5fA-jjq8l_gRyVQHcfB52Mz4tV1PqZ-MzLnBCD8mlhI1dJgSZWyC-KXku8=w480-h71-s-no-gm?authuser=2" width="480" height="71" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <img src="https://lh3.googleusercontent.com/pw/ADCreHchjH6KWyoWfNkssJrSf0aL-ekiy5vE9vGpvyzCnlX63Uy4muBRpX1PZlasiDvkorV1gxseOEG8pDe7k1dZk45vQqbtjZ5oZPTtA0TA_bEl_-7TNqBQ7cnM_Z74-O8cF2ixclepdfK1JZnmQZEDMKE=w402-h27-s-no-gm?authuser=2" width="660" height="33" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <table width="660" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                          <tr>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeGFiQLFUtkn2zuLFfrS_P_Vps7CDmobvFwczHp1M5k_0L_NcaPTLYdy7iQkqUhHWoRI1MYkFThl0wNrcnWcNyeka1ztTNzem6AKJLGUCtMf2Dt_Srd7mLpElvz0w22zwbZnYxaCn9S2oBojCsaHeIy=w26-h40-s-no-gm?authuser=1" width="26" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top; " />
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <a href="https://blog.rightbrain.co.kr/" target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHccF3CII-1vQT5ZjNntGNIzdq3vTEaKlwSrYXXitzK5t83uBAsdzu542WSKWxGrK4cUpQz0_CMvNp9KKHEQgWXjTIw-6hmA0RSXieGYHzfcioMOILEkf3Ojw0UeRtDXpBVlhajlZ3_kPrOA1n513WcM=w155-h39-s-no-gm?authuser=1" width="155" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeQ6Ak3JmTebRV0gdqfImHr6TQZSjQFTJQYgYEKlxVsjzhVzo5EwJuqGhcDZlJiqFmDadst8HauL_3L31yNHoiaPkPCLlhs2c0fcj1EiXaipnZoW54iv-BEbuUNwd_4koTWvIYt-9z221oiFP6f6raI=w192-h39-s-no-gm?authuser=1" width="75" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <a href="https://www.rightbrain.co.kr/" target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHcc-ZEr8WJJ-TecAFMM6lmi8_RE4kLP_T-FlWFICfHB_KAFmYKmL8ti8ezqt_PHnxRf5Rok_Ku5nsfWY_-dC8izCnBt7NCGE8Jl7xxl1rOugAYiPoULSFslPmvNxWi2I2QQNDapPjVFBnDu9nOd_0Ht=w213-h39-s-no-gm?authuser=1" width="213" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeQ6Ak3JmTebRV0gdqfImHr6TQZSjQFTJQYgYEKlxVsjzhVzo5EwJuqGhcDZlJiqFmDadst8HauL_3L31yNHoiaPkPCLlhs2c0fcj1EiXaipnZoW54iv-BEbuUNwd_4koTWvIYt-9z221oiFP6f6raI=w192-h39-s-no-gm?authuser=1" width="191" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <table width="660" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                          <tr>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeGFiQLFUtkn2zuLFfrS_P_Vps7CDmobvFwczHp1M5k_0L_NcaPTLYdy7iQkqUhHWoRI1MYkFThl0wNrcnWcNyeka1ztTNzem6AKJLGUCtMf2Dt_Srd7mLpElvz0w22zwbZnYxaCn9S2oBojCsaHeIy=w26-h40-s-no-gm?authuser=1" width="26" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <a href="https://drive.google.com/uc?export=view&id=1lins3yx66-kqTOC3SjyziKscBbNTV5TD"  target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHdPnEJy5fS0aW0y_4M2PHOj4LAuHRdJS-VYBggZ2x4i709JxB_2DJdz3Jm4bQX84xcq11CNJGcMQD0P9fbG9BGouqdR_ijaanjdS7aawopAp6Kn-39rkvjznjjOqjYZt_j1fPF2Cf2R4OtgndC3iD5h=w155-h39-s-no-gm?authuser=1" width="155" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeQ6Ak3JmTebRV0gdqfImHr6TQZSjQFTJQYgYEKlxVsjzhVzo5EwJuqGhcDZlJiqFmDadst8HauL_3L31yNHoiaPkPCLlhs2c0fcj1EiXaipnZoW54iv-BEbuUNwd_4koTWvIYt-9z221oiFP6f6raI=w192-h39-s-no-gm?authuser=1" width="75" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <a href="https://blog.rightbrain.co.kr/" target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHeD49WhsFJQ9xRYpp7eHUw6oOGqHKM_MSw3TEVgM2D6I4APoSKSJxiXvMVe8p9qC50IVGTm0ofdfQm-VtJCIcCcD3eeE_qBHZ7eAz1xotS59vwAJaJpDOHXNDEeRBmjsXPv5ll37uirh1B6oNQtWTH4=w213-h39-s-no-gm?authuser=1" width="213" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeQ6Ak3JmTebRV0gdqfImHr6TQZSjQFTJQYgYEKlxVsjzhVzo5EwJuqGhcDZlJiqFmDadst8HauL_3L31yNHoiaPkPCLlhs2c0fcj1EiXaipnZoW54iv-BEbuUNwd_4koTWvIYt-9z221oiFP6f6raI=w192-h39-s-no-gm?authuser=1" width="190" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <table width="660" height="35" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                          <tr>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHcMusKMU7FOSWofaQIdF5gVipMGQ_Dr1jwd52dr5bFEkO7XnP5N0EFXBLV4O35t3PAQRtiAJ6uxsXP29N7xVEL89ishH6zA0LI-GBL64u3hcDydmkjRvywLj5pH5Ko9TTcc55drZmqmYp15Z7YpO2kk=w660-h57-s-no-gm?authuser=1" width="257" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <a href="https://www.facebook.com/ux1korea"  target="_blank"><img src="https://lh3.googleusercontent.com/pw/ADCreHd5z1Vt71QdxppdQmIjg5DUnO-Hi17ymS0wPSR5sLrXS4KmBXjJEib-P0Cx7eeHyLbOaVpIuViwoPsztQqiIxJI9iKR690YU6e9iUb-d66htqjkoXHmy3tp7BMtZZ9nrRjfmYl5CKMgVRjHUAUEbYrt=w276-h39-s-no-gm?authuser=1" width="276" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" /></a>
                                              </td>
                                              <td style="vertical-align:top;font-size:0;line-height:initial;">
                                                  <img src="https://lh3.googleusercontent.com/pw/ADCreHeQ6Ak3JmTebRV0gdqfImHr6TQZSjQFTJQYgYEKlxVsjzhVzo5EwJuqGhcDZlJiqFmDadst8HauL_3L31yNHoiaPkPCLlhs2c0fcj1EiXaipnZoW54iv-BEbuUNwd_4koTWvIYt-9z221oiFP6f6raI=w192-h39-s-no-gm?authuser=1" width="127" height="39" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                              <tr>
                                  <td style="vertical-align:top;">
                                      <img src="https://lh3.googleusercontent.com/pw/ADCreHchjH6KWyoWfNkssJrSf0aL-ekiy5vE9vGpvyzCnlX63Uy4muBRpX1PZlasiDvkorV1gxseOEG8pDe7k1dZk45vQqbtjZ5oZPTtA0TA_bEl_-7TNqBQ7cnM_Z74-O8cF2ixclepdfK1JZnmQZEDMKE=w402-h27-s-no-gm?authuser=2" width="660" height="57" hspace="0" vspace="0" border="0" align="absmiddle" alt="" style="display:block; vertical-align:top;" />
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
          </body>
        </html>
      `;
  };

  return <>{getExportHtml()}</>;
};
export default ExportHtmlCode;
