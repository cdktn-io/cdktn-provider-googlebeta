# `googleGeminiGibqObservabilitySetting` Submodule <a name="`googleGeminiGibqObservabilitySetting` Submodule" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiGibqObservabilitySetting <a name="GoogleGeminiGibqObservabilitySetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting google_gemini_gibq_observability_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer"></a>

```typescript
import { googleGeminiGibqObservabilitySetting } from '@cdktn/provider-google-beta'

new googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting(scope: Construct, id: string, config: GoogleGeminiGibqObservabilitySettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig">GoogleGeminiGibqObservabilitySettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig">GoogleGeminiGibqObservabilitySettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.putConversationalAnalyticsSetting">putConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetConversationalAnalyticsSetting">resetConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConversationalAnalyticsSetting` <a name="putConversationalAnalyticsSetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.putConversationalAnalyticsSetting"></a>

```typescript
public putConversationalAnalyticsSetting(value: GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.putConversationalAnalyticsSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleGeminiGibqObservabilitySettingTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a>

---

##### `resetConversationalAnalyticsSetting` <a name="resetConversationalAnalyticsSetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetConversationalAnalyticsSetting"></a>

```typescript
public resetConversationalAnalyticsSetting(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleGeminiGibqObservabilitySetting resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isConstruct"></a>

```typescript
import { googleGeminiGibqObservabilitySetting } from '@cdktn/provider-google-beta'

googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformElement"></a>

```typescript
import { googleGeminiGibqObservabilitySetting } from '@cdktn/provider-google-beta'

googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformResource"></a>

```typescript
import { googleGeminiGibqObservabilitySetting } from '@cdktn/provider-google-beta'

googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport"></a>

```typescript
import { googleGeminiGibqObservabilitySetting } from '@cdktn/provider-google-beta'

googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleGeminiGibqObservabilitySetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGeminiGibqObservabilitySetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGeminiGibqObservabilitySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGeminiGibqObservabilitySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.conversationalAnalyticsSetting">conversationalAnalyticsSetting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference">GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.conversationalAnalyticsSettingInput">conversationalAnalyticsSettingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.gibqObservabilitySettingIdInput">gibqObservabilitySettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.gibqObservabilitySettingId">gibqObservabilitySettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `conversationalAnalyticsSetting`<sup>Required</sup> <a name="conversationalAnalyticsSetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.conversationalAnalyticsSetting"></a>

```typescript
public readonly conversationalAnalyticsSetting: GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference">GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `conversationalAnalyticsSettingInput`<sup>Optional</sup> <a name="conversationalAnalyticsSettingInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.conversationalAnalyticsSettingInput"></a>

```typescript
public readonly conversationalAnalyticsSettingInput: GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `gibqObservabilitySettingIdInput`<sup>Optional</sup> <a name="gibqObservabilitySettingIdInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.gibqObservabilitySettingIdInput"></a>

```typescript
public readonly gibqObservabilitySettingIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleGeminiGibqObservabilitySettingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `gibqObservabilitySettingId`<sup>Required</sup> <a name="gibqObservabilitySettingId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.gibqObservabilitySettingId"></a>

```typescript
public readonly gibqObservabilitySettingId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiGibqObservabilitySettingConfig <a name="GoogleGeminiGibqObservabilitySettingConfig" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.Initializer"></a>

```typescript
import { googleGeminiGibqObservabilitySetting } from '@cdktn/provider-google-beta'

const googleGeminiGibqObservabilitySettingConfig: googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.gibqObservabilitySettingId">gibqObservabilitySettingId</a></code> | <code>string</code> | Id of the requesting object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.conversationalAnalyticsSetting">conversationalAnalyticsSetting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | conversational_analytics_setting block. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#id GoogleGeminiGibqObservabilitySetting#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#project GoogleGeminiGibqObservabilitySetting#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `gibqObservabilitySettingId`<sup>Required</sup> <a name="gibqObservabilitySettingId" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.gibqObservabilitySettingId"></a>

```typescript
public readonly gibqObservabilitySettingId: string;
```

- *Type:* string

Id of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#gibq_observability_setting_id GoogleGeminiGibqObservabilitySetting#gibq_observability_setting_id}

---

##### `conversationalAnalyticsSetting`<sup>Optional</sup> <a name="conversationalAnalyticsSetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.conversationalAnalyticsSetting"></a>

```typescript
public readonly conversationalAnalyticsSetting: GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

conversational_analytics_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#conversational_analytics_setting GoogleGeminiGibqObservabilitySetting#conversational_analytics_setting}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#deletion_policy GoogleGeminiGibqObservabilitySetting#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#id GoogleGeminiGibqObservabilitySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#labels GoogleGeminiGibqObservabilitySetting#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#location GoogleGeminiGibqObservabilitySetting#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#project GoogleGeminiGibqObservabilitySetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleGeminiGibqObservabilitySettingTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#timeouts GoogleGeminiGibqObservabilitySetting#timeouts}

---

### GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting <a name="GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.Initializer"></a>

```typescript
import { googleGeminiGibqObservabilitySetting } from '@cdktn/provider-google-beta'

const googleGeminiGibqObservabilitySettingConversationalAnalyticsSetting: googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.feedbackEnabled">feedbackEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable feedback. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.loggingEnabled">loggingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable logging. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.metricsEnabled">metricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable metrics. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.tracesEnabled">tracesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable traces. |

---

##### `feedbackEnabled`<sup>Optional</sup> <a name="feedbackEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.feedbackEnabled"></a>

```typescript
public readonly feedbackEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#feedback_enabled GoogleGeminiGibqObservabilitySetting#feedback_enabled}

---

##### `loggingEnabled`<sup>Optional</sup> <a name="loggingEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.loggingEnabled"></a>

```typescript
public readonly loggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#logging_enabled GoogleGeminiGibqObservabilitySetting#logging_enabled}

---

##### `metricsEnabled`<sup>Optional</sup> <a name="metricsEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.metricsEnabled"></a>

```typescript
public readonly metricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#metrics_enabled GoogleGeminiGibqObservabilitySetting#metrics_enabled}

---

##### `tracesEnabled`<sup>Optional</sup> <a name="tracesEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.tracesEnabled"></a>

```typescript
public readonly tracesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#traces_enabled GoogleGeminiGibqObservabilitySetting#traces_enabled}

---

### GoogleGeminiGibqObservabilitySettingTimeouts <a name="GoogleGeminiGibqObservabilitySettingTimeouts" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.Initializer"></a>

```typescript
import { googleGeminiGibqObservabilitySetting } from '@cdktn/provider-google-beta'

const googleGeminiGibqObservabilitySettingTimeouts: googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#create GoogleGeminiGibqObservabilitySetting#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#delete GoogleGeminiGibqObservabilitySetting#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#update GoogleGeminiGibqObservabilitySetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#create GoogleGeminiGibqObservabilitySetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#delete GoogleGeminiGibqObservabilitySetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_gemini_gibq_observability_setting#update GoogleGeminiGibqObservabilitySetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference <a name="GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer"></a>

```typescript
import { googleGeminiGibqObservabilitySetting } from '@cdktn/provider-google-beta'

new googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetFeedbackEnabled">resetFeedbackEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetLoggingEnabled">resetLoggingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetMetricsEnabled">resetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetTracesEnabled">resetTracesEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFeedbackEnabled` <a name="resetFeedbackEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetFeedbackEnabled"></a>

```typescript
public resetFeedbackEnabled(): void
```

##### `resetLoggingEnabled` <a name="resetLoggingEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetLoggingEnabled"></a>

```typescript
public resetLoggingEnabled(): void
```

##### `resetMetricsEnabled` <a name="resetMetricsEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetMetricsEnabled"></a>

```typescript
public resetMetricsEnabled(): void
```

##### `resetTracesEnabled` <a name="resetTracesEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetTracesEnabled"></a>

```typescript
public resetTracesEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabledInput">feedbackEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabledInput">loggingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabledInput">metricsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabledInput">tracesEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabled">feedbackEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabled">loggingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabled">metricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabled">tracesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `feedbackEnabledInput`<sup>Optional</sup> <a name="feedbackEnabledInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabledInput"></a>

```typescript
public readonly feedbackEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `loggingEnabledInput`<sup>Optional</sup> <a name="loggingEnabledInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabledInput"></a>

```typescript
public readonly loggingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `metricsEnabledInput`<sup>Optional</sup> <a name="metricsEnabledInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabledInput"></a>

```typescript
public readonly metricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tracesEnabledInput`<sup>Optional</sup> <a name="tracesEnabledInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabledInput"></a>

```typescript
public readonly tracesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `feedbackEnabled`<sup>Required</sup> <a name="feedbackEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabled"></a>

```typescript
public readonly feedbackEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `loggingEnabled`<sup>Required</sup> <a name="loggingEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabled"></a>

```typescript
public readonly loggingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `metricsEnabled`<sup>Required</sup> <a name="metricsEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabled"></a>

```typescript
public readonly metricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tracesEnabled`<sup>Required</sup> <a name="tracesEnabled" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabled"></a>

```typescript
public readonly tracesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting">GoogleGeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---


### GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference <a name="GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleGeminiGibqObservabilitySetting } from '@cdktn/provider-google-beta'

new googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleGeminiGibqObservabilitySettingTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleGeminiGibqObservabilitySetting.GoogleGeminiGibqObservabilitySettingTimeouts">GoogleGeminiGibqObservabilitySettingTimeouts</a>

---



