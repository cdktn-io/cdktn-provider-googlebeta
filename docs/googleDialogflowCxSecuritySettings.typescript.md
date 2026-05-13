# `googleDialogflowCxSecuritySettings` Submodule <a name="`googleDialogflowCxSecuritySettings` Submodule" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxSecuritySettings <a name="GoogleDialogflowCxSecuritySettings" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings google_dialogflow_cx_security_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer"></a>

```typescript
import { googleDialogflowCxSecuritySettings } from '@cdktn/provider-google-beta'

new googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings(scope: Construct, id: string, config: GoogleDialogflowCxSecuritySettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig">GoogleDialogflowCxSecuritySettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig">GoogleDialogflowCxSecuritySettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putAudioExportSettings">putAudioExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putInsightsExportSettings">putInsightsExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetAudioExportSettings">resetAudioExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetDeidentifyTemplate">resetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetInsightsExportSettings">resetInsightsExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetInspectTemplate">resetInspectTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetPurgeDataTypes">resetPurgeDataTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRedactionScope">resetRedactionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRedactionStrategy">resetRedactionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRetentionStrategy">resetRetentionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRetentionWindowDays">resetRetentionWindowDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAudioExportSettings` <a name="putAudioExportSettings" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putAudioExportSettings"></a>

```typescript
public putAudioExportSettings(value: GoogleDialogflowCxSecuritySettingsAudioExportSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putAudioExportSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a>

---

##### `putInsightsExportSettings` <a name="putInsightsExportSettings" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putInsightsExportSettings"></a>

```typescript
public putInsightsExportSettings(value: GoogleDialogflowCxSecuritySettingsInsightsExportSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putInsightsExportSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDialogflowCxSecuritySettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a>

---

##### `resetAudioExportSettings` <a name="resetAudioExportSettings" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetAudioExportSettings"></a>

```typescript
public resetAudioExportSettings(): void
```

##### `resetDeidentifyTemplate` <a name="resetDeidentifyTemplate" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetDeidentifyTemplate"></a>

```typescript
public resetDeidentifyTemplate(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInsightsExportSettings` <a name="resetInsightsExportSettings" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetInsightsExportSettings"></a>

```typescript
public resetInsightsExportSettings(): void
```

##### `resetInspectTemplate` <a name="resetInspectTemplate" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetInspectTemplate"></a>

```typescript
public resetInspectTemplate(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPurgeDataTypes` <a name="resetPurgeDataTypes" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetPurgeDataTypes"></a>

```typescript
public resetPurgeDataTypes(): void
```

##### `resetRedactionScope` <a name="resetRedactionScope" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRedactionScope"></a>

```typescript
public resetRedactionScope(): void
```

##### `resetRedactionStrategy` <a name="resetRedactionStrategy" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRedactionStrategy"></a>

```typescript
public resetRedactionStrategy(): void
```

##### `resetRetentionStrategy` <a name="resetRetentionStrategy" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRetentionStrategy"></a>

```typescript
public resetRetentionStrategy(): void
```

##### `resetRetentionWindowDays` <a name="resetRetentionWindowDays" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetRetentionWindowDays"></a>

```typescript
public resetRetentionWindowDays(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDialogflowCxSecuritySettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isConstruct"></a>

```typescript
import { googleDialogflowCxSecuritySettings } from '@cdktn/provider-google-beta'

googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformElement"></a>

```typescript
import { googleDialogflowCxSecuritySettings } from '@cdktn/provider-google-beta'

googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformResource"></a>

```typescript
import { googleDialogflowCxSecuritySettings } from '@cdktn/provider-google-beta'

googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport"></a>

```typescript
import { googleDialogflowCxSecuritySettings } from '@cdktn/provider-google-beta'

googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDialogflowCxSecuritySettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowCxSecuritySettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowCxSecuritySettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxSecuritySettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.audioExportSettings">audioExportSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference">GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.insightsExportSettings">insightsExportSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference">GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference">GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.audioExportSettingsInput">audioExportSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.deidentifyTemplateInput">deidentifyTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.insightsExportSettingsInput">insightsExportSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.inspectTemplateInput">inspectTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.purgeDataTypesInput">purgeDataTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionScopeInput">redactionScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionStrategyInput">redactionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionStrategyInput">retentionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionWindowDaysInput">retentionWindowDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.inspectTemplate">inspectTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.purgeDataTypes">purgeDataTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionScope">redactionScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionStrategy">redactionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionStrategy">retentionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionWindowDays">retentionWindowDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `audioExportSettings`<sup>Required</sup> <a name="audioExportSettings" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.audioExportSettings"></a>

```typescript
public readonly audioExportSettings: GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference">GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference</a>

---

##### `insightsExportSettings`<sup>Required</sup> <a name="insightsExportSettings" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.insightsExportSettings"></a>

```typescript
public readonly insightsExportSettings: GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference">GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference">GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference</a>

---

##### `audioExportSettingsInput`<sup>Optional</sup> <a name="audioExportSettingsInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.audioExportSettingsInput"></a>

```typescript
public readonly audioExportSettingsInput: GoogleDialogflowCxSecuritySettingsAudioExportSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a>

---

##### `deidentifyTemplateInput`<sup>Optional</sup> <a name="deidentifyTemplateInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.deidentifyTemplateInput"></a>

```typescript
public readonly deidentifyTemplateInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `insightsExportSettingsInput`<sup>Optional</sup> <a name="insightsExportSettingsInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.insightsExportSettingsInput"></a>

```typescript
public readonly insightsExportSettingsInput: GoogleDialogflowCxSecuritySettingsInsightsExportSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a>

---

##### `inspectTemplateInput`<sup>Optional</sup> <a name="inspectTemplateInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.inspectTemplateInput"></a>

```typescript
public readonly inspectTemplateInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `purgeDataTypesInput`<sup>Optional</sup> <a name="purgeDataTypesInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.purgeDataTypesInput"></a>

```typescript
public readonly purgeDataTypesInput: string[];
```

- *Type:* string[]

---

##### `redactionScopeInput`<sup>Optional</sup> <a name="redactionScopeInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionScopeInput"></a>

```typescript
public readonly redactionScopeInput: string;
```

- *Type:* string

---

##### `redactionStrategyInput`<sup>Optional</sup> <a name="redactionStrategyInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionStrategyInput"></a>

```typescript
public readonly redactionStrategyInput: string;
```

- *Type:* string

---

##### `retentionStrategyInput`<sup>Optional</sup> <a name="retentionStrategyInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionStrategyInput"></a>

```typescript
public readonly retentionStrategyInput: string;
```

- *Type:* string

---

##### `retentionWindowDaysInput`<sup>Optional</sup> <a name="retentionWindowDaysInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionWindowDaysInput"></a>

```typescript
public readonly retentionWindowDaysInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDialogflowCxSecuritySettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a>

---

##### `deidentifyTemplate`<sup>Required</sup> <a name="deidentifyTemplate" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.deidentifyTemplate"></a>

```typescript
public readonly deidentifyTemplate: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inspectTemplate`<sup>Required</sup> <a name="inspectTemplate" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.inspectTemplate"></a>

```typescript
public readonly inspectTemplate: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `purgeDataTypes`<sup>Required</sup> <a name="purgeDataTypes" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.purgeDataTypes"></a>

```typescript
public readonly purgeDataTypes: string[];
```

- *Type:* string[]

---

##### `redactionScope`<sup>Required</sup> <a name="redactionScope" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionScope"></a>

```typescript
public readonly redactionScope: string;
```

- *Type:* string

---

##### `redactionStrategy`<sup>Required</sup> <a name="redactionStrategy" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.redactionStrategy"></a>

```typescript
public readonly redactionStrategy: string;
```

- *Type:* string

---

##### `retentionStrategy`<sup>Required</sup> <a name="retentionStrategy" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionStrategy"></a>

```typescript
public readonly retentionStrategy: string;
```

- *Type:* string

---

##### `retentionWindowDays`<sup>Required</sup> <a name="retentionWindowDays" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.retentionWindowDays"></a>

```typescript
public readonly retentionWindowDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxSecuritySettingsAudioExportSettings <a name="GoogleDialogflowCxSecuritySettingsAudioExportSettings" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.Initializer"></a>

```typescript
import { googleDialogflowCxSecuritySettings } from '@cdktn/provider-google-beta'

const googleDialogflowCxSecuritySettingsAudioExportSettings: googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.audioExportPattern">audioExportPattern</a></code> | <code>string</code> | Filename pattern for exported audio. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.audioFormat">audioFormat</a></code> | <code>string</code> | File format for exported audio file. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.enableAudioRedaction">enableAudioRedaction</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable audio redaction if it is true. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.gcsBucket">gcsBucket</a></code> | <code>string</code> | Cloud Storage bucket to export audio record to. |

---

##### `audioExportPattern`<sup>Optional</sup> <a name="audioExportPattern" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.audioExportPattern"></a>

```typescript
public readonly audioExportPattern: string;
```

- *Type:* string

Filename pattern for exported audio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#audio_export_pattern GoogleDialogflowCxSecuritySettings#audio_export_pattern}

---

##### `audioFormat`<sup>Optional</sup> <a name="audioFormat" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.audioFormat"></a>

```typescript
public readonly audioFormat: string;
```

- *Type:* string

File format for exported audio file.

Currently only in telephony recordings.
* MULAW: G.711 mu-law PCM with 8kHz sample rate.
* MP3: MP3 file format.
* OGG: OGG Vorbis. Possible values: ["MULAW", "MP3", "OGG"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#audio_format GoogleDialogflowCxSecuritySettings#audio_format}

---

##### `enableAudioRedaction`<sup>Optional</sup> <a name="enableAudioRedaction" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.enableAudioRedaction"></a>

```typescript
public readonly enableAudioRedaction: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable audio redaction if it is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#enable_audio_redaction GoogleDialogflowCxSecuritySettings#enable_audio_redaction}

---

##### `gcsBucket`<sup>Optional</sup> <a name="gcsBucket" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings.property.gcsBucket"></a>

```typescript
public readonly gcsBucket: string;
```

- *Type:* string

Cloud Storage bucket to export audio record to.

Setting this field would grant the Storage Object Creator role to the Dialogflow Service Agent. API caller that tries to modify this field should have the permission of storage.buckets.setIamPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#gcs_bucket GoogleDialogflowCxSecuritySettings#gcs_bucket}

---

### GoogleDialogflowCxSecuritySettingsConfig <a name="GoogleDialogflowCxSecuritySettingsConfig" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.Initializer"></a>

```typescript
import { googleDialogflowCxSecuritySettings } from '@cdktn/provider-google-beta'

const googleDialogflowCxSecuritySettingsConfig: googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the security settings, unique within the location. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.location">location</a></code> | <code>string</code> | The location these settings are located in. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.audioExportSettings">audioExportSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a></code> | audio_export_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>string</code> | [DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. If empty, Dialogflow replaces sensitive info with [redacted] text. Note: deidentifyTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/deidentifyTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/deidentifyTemplates/<Template ID>. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#id GoogleDialogflowCxSecuritySettings#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.insightsExportSettings">insightsExportSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a></code> | insights_export_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.inspectTemplate">inspectTemplate</a></code> | <code>string</code> | [DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. If empty, we use the default DLP inspect config. Note: inspectTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/inspectTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/inspectTemplates/<Template ID>. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#project GoogleDialogflowCxSecuritySettings#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.purgeDataTypes">purgeDataTypes</a></code> | <code>string[]</code> | List of types of data to remove when retention settings triggers purge. Possible values: ["DIALOGFLOW_HISTORY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.redactionScope">redactionScope</a></code> | <code>string</code> | Defines what types of data to redact. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.redactionStrategy">redactionStrategy</a></code> | <code>string</code> | Defines how we redact data. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.retentionStrategy">retentionStrategy</a></code> | <code>string</code> | Defines how long we retain persisted data that contains sensitive info. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.retentionWindowDays">retentionWindowDays</a></code> | <code>number</code> | Retains the data for the specified number of days. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the security settings, unique within the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#display_name GoogleDialogflowCxSecuritySettings#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location these settings are located in.

Settings can only be applied to an agent in the same location.
See [Available Regions](https://cloud.google.com/dialogflow/cx/docs/concept/region#avail) for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#location GoogleDialogflowCxSecuritySettings#location}

---

##### `audioExportSettings`<sup>Optional</sup> <a name="audioExportSettings" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.audioExportSettings"></a>

```typescript
public readonly audioExportSettings: GoogleDialogflowCxSecuritySettingsAudioExportSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a>

audio_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#audio_export_settings GoogleDialogflowCxSecuritySettings#audio_export_settings}

---

##### `deidentifyTemplate`<sup>Optional</sup> <a name="deidentifyTemplate" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.deidentifyTemplate"></a>

```typescript
public readonly deidentifyTemplate: string;
```

- *Type:* string

[DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. If empty, Dialogflow replaces sensitive info with [redacted] text. Note: deidentifyTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/deidentifyTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/deidentifyTemplates/<Template ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#deidentify_template GoogleDialogflowCxSecuritySettings#deidentify_template}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#id GoogleDialogflowCxSecuritySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insightsExportSettings`<sup>Optional</sup> <a name="insightsExportSettings" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.insightsExportSettings"></a>

```typescript
public readonly insightsExportSettings: GoogleDialogflowCxSecuritySettingsInsightsExportSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a>

insights_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#insights_export_settings GoogleDialogflowCxSecuritySettings#insights_export_settings}

---

##### `inspectTemplate`<sup>Optional</sup> <a name="inspectTemplate" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.inspectTemplate"></a>

```typescript
public readonly inspectTemplate: string;
```

- *Type:* string

[DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. If empty, we use the default DLP inspect config. Note: inspectTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/inspectTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/inspectTemplates/<Template ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#inspect_template GoogleDialogflowCxSecuritySettings#inspect_template}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#project GoogleDialogflowCxSecuritySettings#project}.

---

##### `purgeDataTypes`<sup>Optional</sup> <a name="purgeDataTypes" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.purgeDataTypes"></a>

```typescript
public readonly purgeDataTypes: string[];
```

- *Type:* string[]

List of types of data to remove when retention settings triggers purge. Possible values: ["DIALOGFLOW_HISTORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#purge_data_types GoogleDialogflowCxSecuritySettings#purge_data_types}

---

##### `redactionScope`<sup>Optional</sup> <a name="redactionScope" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.redactionScope"></a>

```typescript
public readonly redactionScope: string;
```

- *Type:* string

Defines what types of data to redact.

If not set, defaults to not redacting any kind of data.
* REDACT_DISK_STORAGE: On data to be written to disk or similar devices that are capable of holding data even if power is disconnected. This includes data that are temporarily saved on disk. Possible values: ["REDACT_DISK_STORAGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#redaction_scope GoogleDialogflowCxSecuritySettings#redaction_scope}

---

##### `redactionStrategy`<sup>Optional</sup> <a name="redactionStrategy" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.redactionStrategy"></a>

```typescript
public readonly redactionStrategy: string;
```

- *Type:* string

Defines how we redact data.

If not set, defaults to not redacting.
* REDACT_WITH_SERVICE: Call redaction service to clean up the data to be persisted. Possible values: ["REDACT_WITH_SERVICE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#redaction_strategy GoogleDialogflowCxSecuritySettings#redaction_strategy}

---

##### `retentionStrategy`<sup>Optional</sup> <a name="retentionStrategy" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.retentionStrategy"></a>

```typescript
public readonly retentionStrategy: string;
```

- *Type:* string

Defines how long we retain persisted data that contains sensitive info.

Only one of 'retention_window_days' and 'retention_strategy' may be set.
* REMOVE_AFTER_CONVERSATION: Removes data when the conversation ends. If there is no conversation explicitly established, a default conversation ends when the corresponding Dialogflow session ends. Possible values: ["REMOVE_AFTER_CONVERSATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#retention_strategy GoogleDialogflowCxSecuritySettings#retention_strategy}

---

##### `retentionWindowDays`<sup>Optional</sup> <a name="retentionWindowDays" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.retentionWindowDays"></a>

```typescript
public readonly retentionWindowDays: number;
```

- *Type:* number

Retains the data for the specified number of days.

User must set a value lower than Dialogflow's default 365d TTL (30 days for Agent Assist traffic), higher value will be ignored and use default. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use default TTL.
Only one of 'retention_window_days' and 'retention_strategy' may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#retention_window_days GoogleDialogflowCxSecuritySettings#retention_window_days}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowCxSecuritySettingsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#timeouts GoogleDialogflowCxSecuritySettings#timeouts}

---

### GoogleDialogflowCxSecuritySettingsInsightsExportSettings <a name="GoogleDialogflowCxSecuritySettingsInsightsExportSettings" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings.Initializer"></a>

```typescript
import { googleDialogflowCxSecuritySettings } from '@cdktn/provider-google-beta'

const googleDialogflowCxSecuritySettingsInsightsExportSettings: googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings.property.enableInsightsExport">enableInsightsExport</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers. |

---

##### `enableInsightsExport`<sup>Required</sup> <a name="enableInsightsExport" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings.property.enableInsightsExport"></a>

```typescript
public readonly enableInsightsExport: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#enable_insights_export GoogleDialogflowCxSecuritySettings#enable_insights_export}

---

### GoogleDialogflowCxSecuritySettingsTimeouts <a name="GoogleDialogflowCxSecuritySettingsTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.Initializer"></a>

```typescript
import { googleDialogflowCxSecuritySettings } from '@cdktn/provider-google-beta'

const googleDialogflowCxSecuritySettingsTimeouts: googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#create GoogleDialogflowCxSecuritySettings#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#delete GoogleDialogflowCxSecuritySettings#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#update GoogleDialogflowCxSecuritySettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#create GoogleDialogflowCxSecuritySettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#delete GoogleDialogflowCxSecuritySettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_dialogflow_cx_security_settings#update GoogleDialogflowCxSecuritySettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference <a name="GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxSecuritySettings } from '@cdktn/provider-google-beta'

new googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioExportPattern">resetAudioExportPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioFormat">resetAudioFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetEnableAudioRedaction">resetEnableAudioRedaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetGcsBucket">resetGcsBucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudioExportPattern` <a name="resetAudioExportPattern" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioExportPattern"></a>

```typescript
public resetAudioExportPattern(): void
```

##### `resetAudioFormat` <a name="resetAudioFormat" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioFormat"></a>

```typescript
public resetAudioFormat(): void
```

##### `resetEnableAudioRedaction` <a name="resetEnableAudioRedaction" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetEnableAudioRedaction"></a>

```typescript
public resetEnableAudioRedaction(): void
```

##### `resetGcsBucket` <a name="resetGcsBucket" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetGcsBucket"></a>

```typescript
public resetGcsBucket(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPatternInput">audioExportPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormatInput">audioFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedactionInput">enableAudioRedactionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucketInput">gcsBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPattern">audioExportPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormat">audioFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedaction">enableAudioRedaction</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucket">gcsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioExportPatternInput`<sup>Optional</sup> <a name="audioExportPatternInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPatternInput"></a>

```typescript
public readonly audioExportPatternInput: string;
```

- *Type:* string

---

##### `audioFormatInput`<sup>Optional</sup> <a name="audioFormatInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormatInput"></a>

```typescript
public readonly audioFormatInput: string;
```

- *Type:* string

---

##### `enableAudioRedactionInput`<sup>Optional</sup> <a name="enableAudioRedactionInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedactionInput"></a>

```typescript
public readonly enableAudioRedactionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `gcsBucketInput`<sup>Optional</sup> <a name="gcsBucketInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucketInput"></a>

```typescript
public readonly gcsBucketInput: string;
```

- *Type:* string

---

##### `audioExportPattern`<sup>Required</sup> <a name="audioExportPattern" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPattern"></a>

```typescript
public readonly audioExportPattern: string;
```

- *Type:* string

---

##### `audioFormat`<sup>Required</sup> <a name="audioFormat" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormat"></a>

```typescript
public readonly audioFormat: string;
```

- *Type:* string

---

##### `enableAudioRedaction`<sup>Required</sup> <a name="enableAudioRedaction" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedaction"></a>

```typescript
public readonly enableAudioRedaction: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `gcsBucket`<sup>Required</sup> <a name="gcsBucket" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucket"></a>

```typescript
public readonly gcsBucket: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxSecuritySettingsAudioExportSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsAudioExportSettings">GoogleDialogflowCxSecuritySettingsAudioExportSettings</a>

---


### GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference <a name="GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxSecuritySettings } from '@cdktn/provider-google-beta'

new googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExportInput">enableInsightsExportInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExport">enableInsightsExport</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInsightsExportInput`<sup>Optional</sup> <a name="enableInsightsExportInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExportInput"></a>

```typescript
public readonly enableInsightsExportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableInsightsExport`<sup>Required</sup> <a name="enableInsightsExport" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExport"></a>

```typescript
public readonly enableInsightsExport: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxSecuritySettingsInsightsExportSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsInsightsExportSettings">GoogleDialogflowCxSecuritySettingsInsightsExportSettings</a>

---


### GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference <a name="GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxSecuritySettings } from '@cdktn/provider-google-beta'

new googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxSecuritySettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxSecuritySettings.GoogleDialogflowCxSecuritySettingsTimeouts">GoogleDialogflowCxSecuritySettingsTimeouts</a>

---



