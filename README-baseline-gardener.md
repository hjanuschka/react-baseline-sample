# 🌱 Baseline Gardener React Demo

This is a **React TypeScript demo application** showcasing the **baseline-gardener** tool in action!

## 🚀 What This Demo Shows

This React app demonstrates the difference between:
- ✅ **Baseline Compatible Features** - Safe to use across modern browsers
- ⚠️ **Experimental Features** - Cutting-edge APIs that aren't baseline yet

## 🎯 Features Included

### ✅ Baseline Compatible (Safe to Use)
- **CSS Grid & Flexbox** - Modern layout systems
- **Dialog Element** - Native modal dialogs
- **Fetch API** - Modern HTTP requests
- **Intersection Observer** - Scroll-based visibility detection
- **Custom Properties** - CSS Variables
- **Modern Form Elements** - Email, date, color inputs
- **Details/Summary** - Collapsible content

### ⚠️ Experimental (Not Baseline Yet)
- **Web Bluetooth API** - Connect to Bluetooth devices
- **File System Access API** - Read/write files directly
- **WebUSB API** - Access USB devices
- **Wake Lock API** - Prevent screen sleep
- **WebGPU** - High-performance graphics
- **Container Queries** - Size-based responsive design
- **CSS Nesting** - Nested CSS rules
- **Backdrop Filter** - Blur/filter effects

## 🛠️ Running the Demo

### Prerequisites
```bash
node >= 18.0.0
npm >= 8.0.0
```

### Installation & Setup
```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

## 🌱 Testing with Baseline Gardener

This project includes **baseline-gardener** as a dev dependency for compatibility checking:

### Basic Compatibility Check
```bash
npm run baseline:check
```
Scans the `src/` directory and reports baseline compatibility issues.

### Strict Mode (Widely Available Only)
```bash
npm run baseline:check:strict
```
Only allows "widely available" features, flags "newly available" as warnings.

### Generate Markdown Report
```bash
npm run baseline:report
```
Creates a `baseline-report.md` file with detailed compatibility information.

## 📊 Expected Results

When you run baseline checks on this demo:

### ✅ **Normal Mode Results:**
- **Total features detected:** ~18
- **Baseline compatible:** ~15
- **Issues found:** ~3 errors/warnings
- **Non-baseline features:** Content Visibility, some unknown APIs

### ⚠️ **Strict Mode Results:**
- **Additional warnings:** Backdrop Filter, Subgrid (newly available)
- **Total issues:** ~5 errors/warnings
- **Stricter requirements:** Only widely available features allowed

## 🔍 What Gets Detected

### JavaScript Features
- ✅ `fetch()`, `IntersectionObserver`, `CSS.supports()`
- ⚠️ `navigator.bluetooth`, `navigator.usb`, `showOpenFilePicker()`

### CSS Features  
- ✅ `display: grid`, `display: flex`, custom properties
- ⚠️ `container-type`, `backdrop-filter`, `content-visibility`

### HTML Features
- ✅ `<dialog>`, `<details>`, `<input type="email">`
- ⚠️ Custom elements, experimental attributes

## 🏗️ Project Structure

```
src/
├── components/
│   ├── BaselineFeatures.tsx     # ✅ Safe, baseline features
│   ├── BaselineFeatures.css
│   ├── ExperimentalFeatures.tsx # ⚠️ Cutting-edge features
│   └── ExperimentalFeatures.css
├── App.tsx                      # Main app with toggle controls
├── App.css                      # App styling
└── index.tsx                    # React entry point
```

## 🎨 Interactive Features

### Toggle Controls
- **✅ Baseline Features** - Show/hide baseline-compatible components
- **⚠️ Experimental Features** - Show/hide experimental components

### Baseline Features Demo
- **CSS Grid Layout** - Responsive grid system
- **Modal Dialog** - Native HTML dialog with form
- **Intersection Observer** - Scroll-triggered visibility
- **Fetch API** - Network request example

### Experimental Features Demo  
- **Web APIs** - Bluetooth, USB, File System access
- **Advanced CSS** - Container queries, nesting, backdrop filters
- **Custom Elements** - Web components with experimental styling

## 🚨 Browser Compatibility

### Baseline Features
- ✅ **Chrome 80+**, **Firefox 75+**, **Safari 14+**, **Edge 80+**
- Safe for production use across modern browsers

### Experimental Features
- ⚠️ **Limited browser support** - May not work in all browsers
- 🧪 **Use with caution** - Consider polyfills or progressive enhancement

## 📚 Learn More

- **Baseline Documentation**: [web.dev/baseline](https://web.dev/baseline)
- **Web Features Data**: [web-features npm package](https://www.npmjs.com/package/web-features)
- **Baseline Gardener**: [NPM Package](https://www.npmjs.com/package/baseline-gardener)

## 🤝 Contributing

Found an issue or want to add more examples? Contributions are welcome!

1. Fork the repository
2. Add new features or fix bugs
3. Run `npm run baseline:check` to verify compatibility
4. Submit a pull request

## 📈 CI/CD Integration

This demo shows how to integrate baseline-gardener into your development workflow:

- **Local Development**: Run checks before committing
- **CI/CD Pipeline**: Automated compatibility validation
- **Code Reviews**: Include baseline reports in PRs
- **Documentation**: Generate compatibility matrices

---

## 🏆 Perfect for the Baseline Tooling Hackathon!

This demo showcases how **baseline-gardener** helps developers:

1. **Avoid compatibility surprises** - Know what won't work before users complain
2. **Make informed decisions** - Data-driven choices about when to adopt new features  
3. **Ship with confidence** - Automated compatibility checking in development
4. **Educate the team** - Visual examples of baseline vs experimental features

**Ready to nurture baseline-compatible code? Start gardening! 🌱**