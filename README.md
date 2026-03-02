# Gjurmuesi i Shpenzimeve 💰

Një aplikacion i thjeshtë dhe elegant për të menaxhuar shpenzimet tuaja ditore, i ndërtuar me **React**, **Vite**, dhe **Tailwind CSS**.

## 🚀 Si ta hapni faqen LIVE (Falas)

Nëse e keni ngarkuar kodin në GitHub dhe faqja po rri bardhë, kjo ndodh sepse GitHub nuk e "përkthen" dot automatikisht kodin React në një faqe interneti pa e "ndërtuar" (build) atë.

### Mënyra më e shpejtë (Netlify ose Vercel):

1. Shkoni te [Netlify.com](https://www.netlify.com/) ose [Vercel.com](https://vercel.com/) dhe krijoni një llogari falas.
2. Klikoni **"Add new site"** -> **"Import from GitHub"**.
3. Zgjidhni këtë repozitor.
4. Klikoni **"Deploy"**.
   - Netlify do ta kuptojë automatikisht që është një projekt Vite.
   - Brenda 1 minute, do t'ju japë një link (psh. `gjurmuesi.netlify.app`) ku faqja do të punojë perfekt!

## 🛠️ Instalimi Lokal

Nëse dëshironi ta punoni në kompjuterin tuaj:

1. Shkarkoni kodin.
2. Hapni terminalin në atë folder.
3. Instaloni varësitë:
   ```bash
   npm install
   ```
4. Nisni serverin për zhvillim:
   ```bash
   npm run dev
   ```
5. Për ta bërë gati për publikim (build):
   ```bash
   npm run build
   ```

## 📝 Shënime
Ky projekt përdor `localStorage` për të ruajtur të dhënat, kështu që nuk keni nevojë për një bazë të dhënash (database) të jashtme.
