import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Animated,
  ScrollView,
} from "react-native";

// ── Palette untuk Toggle Color (Side Quest) ──────────────────
const COLOR_THEMES = [
  { bg: "#0f172a", accent: "#38bdf8", card: "#1e293b", label: "Midnight Blue" },
  { bg: "#1a0a2e", accent: "#c084fc", card: "#2d1b4e", label: "Royal Purple" },
  { bg: "#022c22", accent: "#34d399", card: "#064e3b", label: "Forest Green" },
  { bg: "#1c0a00", accent: "#fb923c", card: "#431407", label: "Ember Orange" },
  { bg: "#1a1a2e", accent: "#f472b6", card: "#2d2d44", label: "Neon Pink" },
];

export default function App() {
  // ── State (Main Quest) ─────────────────────────────────────
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [themeIndex, setThemeIndex] = useState(0);

  const theme = COLOR_THEMES[themeIndex];

  // ── Handlers ───────────────────────────────────────────────
  const increment = () => setCount((prev) => prev + 1);

  // Side Quest Validation: tidak boleh < 0
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  const reset = () => setCount(0);

  // Side Quest Toggle Color
  const toggleColor = () =>
    setThemeIndex((prev) => (prev + 1) % COLOR_THEMES.length);

  // ── Greeting Logic ─────────────────────────────────────────
  const greeting =
    name.trim().length > 0 ? `Halo, ${name}! 👋` : "Halo, Siapa Namamu?";

  // ── Counter Color Feedback ─────────────────────────────────
  const countColor =
    count === 0 ? "#94a3b8" : count >= 10 ? "#f87171" : theme.accent;

  // ──────────────────────────────────────────────────────────
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.bg }]}>
      <StatusBar barStyle="light-content" backgroundColor={theme.bg} />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* ── HEADER ───────────────────────────────────────── */}
        <View style={styles.header}>
          <Text style={[styles.headerBadge, { color: theme.accent }]}>
            MISSION 4
          </Text>
          <Text style={styles.headerTitle}>Magic{"\n"}Dashboard</Text>
          <Text style={[styles.headerSub, { color: theme.accent }]}>
            State & Props • Interactive App
          </Text>
        </View>

        {/* ── COUNTER CARD ─────────────────────────────────── */}
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <View style={[styles.cardLabelRow]}>
            <View style={[styles.dot, { backgroundColor: theme.accent }]} />
            <Text style={styles.cardLabel}>Counter System</Text>
          </View>

          {/* Angka di tengah */}
          <Text style={[styles.countNumber, { color: countColor }]}>
            {count}
          </Text>

          {count === 0 && (
            <Text style={styles.zeroHint}>⚠ Tidak bisa kurang dari 0</Text>
          )}

          {/* Tombol +  dan  − */}
          <View style={styles.btnRow}>
            <TouchableOpacity
              style={[styles.circleBtn, { borderColor: "#f87171" }]}
              onPress={decrement}
              activeOpacity={0.75}
            >
              <Text style={[styles.circleBtnText, { color: "#f87171" }]}>
                −
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.resetBtn, { borderColor: theme.accent }]}
              onPress={reset}
              activeOpacity={0.75}
            >
              <Text style={[styles.resetBtnText, { color: theme.accent }]}>
                RESET
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.circleBtn, { borderColor: "#4ade80" }]}
              onPress={increment}
              activeOpacity={0.75}
            >
              <Text style={[styles.circleBtnText, { color: "#4ade80" }]}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── GREETING CARD ────────────────────────────────── */}
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <View style={styles.cardLabelRow}>
            <View style={[styles.dot, { backgroundColor: theme.accent }]} />
            <Text style={styles.cardLabel}>Greeting Form</Text>
          </View>

          <TextInput
            style={[
              styles.input,
              { borderColor: theme.accent, color: "#f1f5f9" },
            ]}
            placeholder="Ketik namamu di sini..."
            placeholderTextColor="#475569"
            value={name}
            onChangeText={setName} // Two-way binding real-time
            maxLength={30}
          />

          {/* Sapaan otomatis */}
          <View style={[styles.greetingBox, { borderLeftColor: theme.accent }]}>
            <Text style={[styles.greetingText, { color: theme.accent }]}>
              {greeting}
            </Text>
          </View>

          {name.length > 0 && (
            <TouchableOpacity onPress={() => setName("")} activeOpacity={0.7}>
              <Text style={[styles.clearText, { color: "#94a3b8" }]}>
                ✕ Hapus nama
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* ── SIDE QUEST: Toggle Color ──────────────────────── */}
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <View style={styles.cardLabelRow}>
            <View style={[styles.dot, { backgroundColor: "#fbbf24" }]} />
            <Text style={styles.cardLabel}>Side Quest — Toggle Color 🔥</Text>
          </View>

          <Text style={[styles.themeLabel, { color: theme.accent }]}>
            Theme: {theme.label}
          </Text>

          <View style={styles.swatchRow}>
            {COLOR_THEMES.map((t, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  styles.swatch,
                  { backgroundColor: t.accent },
                  i === themeIndex && styles.swatchActive,
                ]}
                onPress={() => setThemeIndex(i)}
              />
            ))}
          </View>

          <TouchableOpacity
            style={[styles.colorBtn, { backgroundColor: theme.accent }]}
            onPress={toggleColor}
            activeOpacity={0.8}
          >
            <Text style={[styles.colorBtnText, { color: theme.bg }]}>
              🎨 Ganti Warna
            </Text>
          </TouchableOpacity>
        </View>

        {/* ── STATE INSPECTOR (bonus) ───────────────────────── */}
        <View
          style={[
            styles.card,
            styles.inspectorCard,
            { backgroundColor: theme.card },
          ]}
        >
          <Text style={[styles.inspectorTitle, { color: "#64748b" }]}>
            {"// "} State Inspector
          </Text>
          <Text style={styles.inspectorLine}>
            <Text style={{ color: "#7dd3fc" }}>count</Text>
            <Text style={{ color: "#94a3b8" }}> = </Text>
            <Text style={{ color: "#86efac" }}>{count}</Text>
          </Text>
          <Text style={styles.inspectorLine}>
            <Text style={{ color: "#7dd3fc" }}>name</Text>
            <Text style={{ color: "#94a3b8" }}> = </Text>
            <Text style={{ color: "#fca5a5" }}>"{name}"</Text>
          </Text>
          <Text style={styles.inspectorLine}>
            <Text style={{ color: "#7dd3fc" }}>themeIndex</Text>
            <Text style={{ color: "#94a3b8" }}> = </Text>
            <Text style={{ color: "#d8b4fe" }}>{themeIndex}</Text>
          </Text>
        </View>

        <Text style={styles.footer}>
          Built with React Native • useState • Props{"\n"}
          🎓 Praktikum Minggu 4
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

// ── STYLES ─────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safeArea: { flex: 1 },

  scroll: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 16,
  },

  // Header
  header: { marginBottom: 24, paddingTop: 8 },
  headerBadge: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 3,
    marginBottom: 6,
  },
  headerTitle: {
    fontSize: 42,
    fontWeight: "800",
    color: "#f1f5f9",
    lineHeight: 46,
    letterSpacing: -1,
  },
  headerSub: {
    fontSize: 13,
    fontWeight: "500",
    marginTop: 6,
    letterSpacing: 1,
  },

  // Card
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  cardLabelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  cardLabel: {
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },

  // Counter
  countNumber: {
    fontSize: 96,
    fontWeight: "900",
    textAlign: "center",
    letterSpacing: -4,
    marginVertical: 8,
  },
  zeroHint: {
    textAlign: "center",
    color: "#f87171",
    fontSize: 12,
    marginBottom: 8,
    fontStyle: "italic",
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginTop: 8,
  },
  circleBtn: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  circleBtnText: {
    fontSize: 28,
    fontWeight: "300",
    lineHeight: 32,
  },
  resetBtn: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1.5,
  },
  resetBtnText: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
  },

  // Input / Greeting
  input: {
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    marginBottom: 14,
    backgroundColor: "rgba(255,255,255,0.04)",
  },
  greetingBox: {
    borderLeftWidth: 3,
    paddingLeft: 14,
    paddingVertical: 4,
    marginBottom: 10,
  },
  greetingText: {
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: -0.3,
  },
  clearText: {
    fontSize: 12,
    marginTop: 4,
    textAlign: "right",
  },

  // Color Toggle
  themeLabel: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 14,
    letterSpacing: -0.3,
  },
  swatchRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 16,
  },
  swatch: {
    width: 32,
    height: 32,
    borderRadius: 16,
    opacity: 0.7,
  },
  swatchActive: {
    opacity: 1,
    transform: [{ scale: 1.25 }],
    borderWidth: 2,
    borderColor: "#fff",
  },
  colorBtn: {
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  colorBtnText: {
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 0.5,
  },

  // Inspector
  inspectorCard: { borderWidth: 1, borderColor: "#1e293b" },
  inspectorTitle: {
    fontSize: 11,
    fontFamily: "monospace",
    marginBottom: 8,
    letterSpacing: 1,
  },
  inspectorLine: {
    fontSize: 13,
    fontFamily: "monospace",
    marginBottom: 4,
    color: "#94a3b8",
  },

  footer: {
    color: "#334155",
    fontSize: 12,
    textAlign: "center",
    marginTop: 8,
    lineHeight: 20,
  },
});
