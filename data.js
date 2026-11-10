// ═══════════════════════════════════════════════════════════
// PSMIS Dashboard — Data Module
// ข้อมูลทั้งหมดจากเดิม + ฟังก์ชันโหลดข้อมูลจากภายนอก
// ═══════════════════════════════════════════════════════════

const DashboardData = (() => {

    // ── ข้อมูลอัตรากำลัง ──
    const workforceData = [
	{ name: 'ตำรวจ', ข้าราชการ: 338165, ลูกจ้างประจำ: 749 },
	{ name: 'ทหาร', ข้าราชการ: 494328, ลูกจ้างประจำ: 17805 },
	{ name: 'พลเรือน', ข้าราชการ: 485399, ลูกจ้างประจำ: 27978 },
	{ name: 'มหาวิทยาลัย', ข้าราชการ: 14086, ลูกจ้างประจำ: 2785 },
	{ name: 'ครู/บุคลากร', ข้าราชการ: 454202, ลูกจ้างประจำ: 6981 },
    ];

    // ── ข้อมูลเงินเดือนและค่าจ้าง ──
    const salaryData = [
	{ type: 'เงินเดือน รอบ 1', count: 10230, amount: 151.18 },
	{ type: 'เงินเดือน รอบ 2', count: 1307349, amount: 47234.96 },
	{ type: 'ค่าจ้างประจำ รอบ 1', count: 127, amount: 0.95 },
	{ type: 'ค่าจ้างประจำ รอบ 2', count: 29942, amount: 971.48 },
	{ type: 'กบข. รอบ 1', count: 8854, amount: 23.89 },
	{ type: 'กบข. รอบ 2', count: 1204558, amount: 3985.79 },
	{ type: 'กสจ. รอบ 1', count: 118, amount: 0.14 },
	{ type: 'กสจ. รอบ 2', count: 25815, amount: 52.73 },
	{ type: 'กยศ. ข้าราชการ', count: 194078, amount: 213.97 },
	{ type: 'กยศ. ลูกจ้าง', count: 108, amount: 0.09 },
    ];

    // ── ข้อมูลทหารกองประจำการ ──
    const conscriptData = [
	{ name: 'สป.กลาโหม', count: 1215, amount: 9.75 },
	{ name: 'กองทัพบก', count: 107792, amount: 877.51 },
	{ name: 'กองทัพเรือ', count: 19578, amount: 160.18 },
	{ name: 'กองทัพอากาศ', count: 8707, amount: 69.87 },
	{ name: 'บก.กองทัพไทย', count: 1343, amount: 21.58 },

    ];

    // ── ข้อมูลงบกลาง ──
    const budgetData = [
        { month: 'ต.ค.68',  งบประมาณ: 364288.75, จัดสรร: 182144.38, เบิกจ่าย: 39476.68 },
    	{ month: 'พ.ย.68',  งบประมาณ: 364288.75, จัดสรร: 182144.38, เบิกจ่าย: 73338.64 },
    	{ month: 'ธ.ค.68',  งบประมาณ: 364288.75, จัดสรร: 182144.38, เบิกจ่าย: 107183.05 },
    	{ month: 'ม.ค.69',  งบประมาณ: 364288.75, จัดสรร: 182144.38, เบิกจ่าย: 140911.26 },
    	{ month: 'ก.พ.69',  งบประมาณ: 364288.75, จัดสรร: 182144.38, เบิกจ่าย: 174477.18 },
    	{ month: 'มี.ค.69',  งบประมาณ: 364288.75, จัดสรร: 273216.56, เบิกจ่าย: 208003.79 },
    	{ month: 'เม.ย.69',  งบประมาณ: 364288.75, จัดสรร: 273726.38, เบิกจ่าย: 241722.48 },
    	{ month: 'พ.ค.69',  งบประมาณ: 364288.75, จัดสรร: 364288.75, เบิกจ่าย: 274726.38 },
    	{ month: 'มิ.ย.69',   งบประมาณ: 364288.75, จัดสรร: 364288.75, เบิกจ่าย: 309681.64 },
    	{ month: 'ก.ค.69',   งบประมาณ: 364288.75, จัดสรร: 364288.75, เบิกจ่าย: 343215.89 },
    	{ month: 'ส.ค.69',   งบประมาณ: 364288.75, จัดสรร: 364288.75, เบิกจ่าย: 376764.03 },
    	{ month: 'ก.ย.69',   งบประมาณ: 364288.75, จัดสรร: 364288.75, เบิกจ่าย: 410247.95 },
    	{ month: 'ต.ค.69',   งบประมาณ: 364288.75, จัดสรร: 182144.38, เบิกจ่าย: 39476.68},

    ];

    // ── ข้อมูลบำนาญ ──
    const pensionData = [
	{ name:'เบี้ยหวัด', count:5661, amount:76.8 },
	{ name:'บำเหน็จปกติ', count:167, amount:105.9 },
	{ name:'บำนาญปกติ', count:920203, amount:28763.97 },
	{ name:'บำนาญพิเศษ', count:9234, amount:95.54 },
	{ name:'บำเหน็จตกทอด', count:4291, amount:641.02 },
	{ name:'บำเหน็จลูกจ้าง', count:229, amount:202.7 },
	{ name:'เงินทำขวัญ', count:0, amount:0 },
	{ name:'บำนาญตกทอด', count:117, amount:1.12 },
	{ name:'บำเหน็จดำรงชีพ', count:34810, amount:6696.84 },
	{ name:'บำนาญข้าราชการการเมือง', count:25, amount:0.34 },
	{ name:'บำเน็จข้าราชการการเมือง', count:2, amount:0.19 },
	{ name:'มาตรการพัฒนาและบริหารกำลังคนฯ', count:31, amount:18.25 },
	{ name:'บำนาญพิเศษเหตุทุพพลภาพอาสาสมัคร', count:530, amount:9.09 },
	{ name:'บำเหน็จพิเศษลูกจ้างตาย', count:0, amount:0 },
	{ name:'บำเหน็จปกติลูกจ้างตาย', count:28, amount:24.98 },
	{ name:'บำนาญพิเศษเหตุทุพพลภาพ', count:1054, amount:16.46 },
	{ name:'บำนาญพิเศษอาสาสมัครตาย', count:1082, amount:14.88 },
	{ name:'บำเหน็จรายเดือน', count:107862, amount:1904.32 },
	{ name:'บำเหน็จพิเศษรายเดือน', count:1, amount:0.01 },
	{ name:'บำเหน็จตกทอด (ผู้รับเบี้ยหวัด/บำเหน็จพิเศษรายเดือน)', count:268, amount:14.78 },
	{ name:'บำเหน็จตกทอดค้ำประกัน', count:1309, amount:798.79 },
	{ name:'บำเหน็จตกทอดค้ำประกันลูกจ้าง', count:89, amount:21.28 },
    ];

    // ── ข้อมูลหนังสือรับรอง ──
    const certData = [
    	{ name: 'กรมบัญชีกลาง',  รับเรื่อง: 5503, อนุมัติ: 5362 },
    	{ name: 'สถาบันการเงิน', รับเรื่อง: 3153, อนุมัติ: 3105 },
    ];

    // ── ข้อมูลเงินสงเคราะห์ ──
    const welfareData = [
        { label: 'อนุมัติจ่าย (ราย)',                               value: 0,     icon: '👤', color: '#1e40af', bg: 'var(--kpi-blue-bg)' },
        { label: 'เงินชดเชย (ล้านบาท)',                             value: 0,     icon: '💰', color: '#0891b2', bg: 'var(--kpi-teal-bg)' },
        { label: 'เงินดำรงชีพ (ล้านบาท)',                           value: 0,     icon: '🏠', color: '#059669', bg: 'var(--kpi-green-bg)' },
        { label: 'เงินชดเชยรพหว่างพักรักษาตัวที่ รพ. (ล้านบาท)',    value: 0, icon: '🏥', color: '#db2777', bg: 'var(--kpi-pink-bg)' },
    ];

    // ── Chart Palette ──
    const PALETTE = ['#1e40af', '#3b82f6', '#0ea5e9', '#38bdf8', '#7dd3fc'];

    // ── Number Formatter ──
    const FMT = new Intl.NumberFormat('th-TH', { maximumFractionDigits: 2 });

    // ── KPI Summary Calculations ──
    const getKpiSummary = (data) => {
        const d = data || { workforceData, salaryData, conscriptData, budgetData };
        return {
            totalWorkforce:  d.workforceData.reduce((a, row) => a + row.ข้าราชการ + row.ลูกจ้างประจำ, 0),
            totalSalary:     d.salaryData.reduce((a, row) => a + row.amount, 0),
            totalConscript:  d.conscriptData.reduce((a, row) => a + row.amount, 0),
            latestBudget:    d.budgetData[d.budgetData.length - 1].เบิกจ่าย,
        };
    };

    // ── Load JSON from URL ──
    const loadFromJSON = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to load JSON');
            return await response.json();
        } catch (err) {
            console.error('Error loading JSON:', err);
            return null;
        }
    };

    // ── Load Excel file (requires SheetJS/xlsx) ──
    const loadFromExcel = (file) => {
        return new Promise((resolve, reject) => {
            if (!window.XLSX) {
                reject(new Error('SheetJS library not loaded'));
                return;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const workbook = XLSX.read(e.target.result, { type: 'array' });
                    const result = {};
                    workbook.SheetNames.forEach(name => {
                        result[name] = XLSX.utils.sheet_to_json(workbook.Sheets[name]);
                    });
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            };
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    };

    // ── Topics configuration ──
    const topics = [
        { id: 't1', label: 'อัตรากำลัง ขรก./ลจ.',       iconKey: 'People' },
        { id: 't2', label: 'จ่ายตรงเงินเดือน ขรก./ลจ.', iconKey: 'Money' },
        { id: 't3', label: 'จ่ายตรงทหารกองประจำการ',     iconKey: 'Shield' },
        { id: 't4', label: 'การจ่ายงบกลาง',              iconKey: 'TrendUp' },
        { id: 't5', label: 'จ่ายตรงบำนาญและเงินอื่น',   iconKey: 'Heart' },
        { id: 't6', label: 'การออกหนังสือรับรอง',        iconKey: 'Doc' },
        { id: 't7', label: 'การจ่ายเงินสงเคราะห์',      iconKey: 'Gift' },
    ];

    // ── Pension dot colors ──
    const pensionDotColors = [
        '#1e40af', '#3b82f6', '#0ea5e9', '#38bdf8', '#10b981',
        '#db2777', '#7c3aed', '#f59e0b', '#94a3b8', '#ef4444',
        '#06b6d4', '#8b5cf6', '#f97316', '#14b8a6', '#ec4899',
        '#6366f1', '#84cc16', '#a855f7', '#22d3ee', '#f43f5e'
    ];

    return {
        workforceData,
        salaryData,
        conscriptData,
        budgetData,
        pensionData,
        certData,
        welfareData,
        PALETTE,
        FMT,
        topics,
        pensionDotColors,
        getKpiSummary,
        loadFromJSON,
        loadFromExcel,
    };
})();
