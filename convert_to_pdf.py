from reportlab.lib.pagesizes import letter, A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.enums import TA_LEFT, TA_CENTER
import re

# Leer el archivo markdown
with open('GUIA_DOCENTE.md', 'r', encoding='utf-8') as f:
    md_text = f.read()

# Crear el PDF
pdf = SimpleDocTemplate("GUIA_DOCENTE.pdf", pagesize=A4,
                       rightMargin=50, leftMargin=50,
                       topMargin=50, bottomMargin=50)

# Estilos
styles = getSampleStyleSheet()
story = []

# Estilos personalizados
title_style = ParagraphStyle(
    'CustomTitle',
    parent=styles['Heading1'],
    fontSize=24,
    spaceAfter=30,
    alignment=TA_CENTER
)

heading1_style = ParagraphStyle(
    'CustomHeading1',
    parent=styles['Heading1'],
    fontSize=18,
    spaceAfter=12,
    spaceBefore=12
)

heading2_style = ParagraphStyle(
    'CustomHeading2',
    parent=styles['Heading2'],
    fontSize=14,
    spaceAfter=10,
    spaceBefore=10
)

heading3_style = ParagraphStyle(
    'CustomHeading3',
    parent=styles['Heading3'],
    fontSize=12,
    spaceAfter=8,
    spaceBefore=8
)

body_style = ParagraphStyle(
    'CustomBody',
    parent=styles['BodyText'],
    fontSize=10,
    leading=14,
    alignment=TA_LEFT
)

# Procesar el texto markdown línea por línea
lines = md_text.split('\n')
for line in lines:
    line = line.strip()
    
    if not line:
        story.append(Spacer(1, 0.2*inch))
    elif line.startswith('# '):
        text = line[2:].strip()
        story.append(Paragraph(text, title_style))
    elif line.startswith('## '):
        text = line[3:].strip()
        story.append(Paragraph(text, heading1_style))
    elif line.startswith('### '):
        text = line[4:].strip()
        story.append(Paragraph(text, heading2_style))
    elif line.startswith('#### '):
        text = line[5:].strip()
        story.append(Paragraph(text, heading3_style))
    elif line.startswith('---'):
        story.append(Spacer(1, 0.3*inch))
    elif line.startswith('- [ ]') or line.startswith('- [x]'):
        checked = '[ ]' if '- [ ]' in line else '[X]'
        text = line.replace('- [ ]', '').replace('- [x]', '').strip()
        story.append(Paragraph(f"{checked} {text}", body_style))
    elif line.startswith(('-', '*', '•')):
        text = line[1:].strip()
        text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', text)
        text = re.sub(r'[🎯🧠🔢📊⚖️🚀📚🌐👨‍🎓👨‍🏫🎮📝🔧🔒📞💡📱🕐👀💬📈🔍💾]', '', text)
        story.append(Paragraph(f"  • {text}", body_style))
    else:
        if line:
            text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', line)
            text = re.sub(r'`(.*?)`', r'<font face="Courier">\1</font>', text)
            text = re.sub(r'[🎯🧠🔢📊⚖️🚀📚🌐👨‍🎓👨‍🏫🎮📝🔧🔒📞💡📱🕐👀💬📈🔍💾✅❌⚠️]', '', text)
            story.append(Paragraph(text, body_style))

# Generar PDF
pdf.build(story)
print("PDF generado exitosamente: GUIA_DOCENTE.pdf")
