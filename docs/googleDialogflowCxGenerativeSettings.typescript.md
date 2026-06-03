# `googleDialogflowCxGenerativeSettings` Submodule <a name="`googleDialogflowCxGenerativeSettings` Submodule" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxGenerativeSettings <a name="GoogleDialogflowCxGenerativeSettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings google_dialogflow_cx_generative_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

new googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings(scope: Construct, id: string, config: GoogleDialogflowCxGenerativeSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig">GoogleDialogflowCxGenerativeSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig">GoogleDialogflowCxGenerativeSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putFallbackSettings">putFallbackSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putGenerativeSafetySettings">putGenerativeSafetySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putKnowledgeConnectorSettings">putKnowledgeConnectorSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putLlmModelSettings">putLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetFallbackSettings">resetFallbackSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetGenerativeSafetySettings">resetGenerativeSafetySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetKnowledgeConnectorSettings">resetKnowledgeConnectorSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetLlmModelSettings">resetLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFallbackSettings` <a name="putFallbackSettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putFallbackSettings"></a>

```typescript
public putFallbackSettings(value: GoogleDialogflowCxGenerativeSettingsFallbackSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putFallbackSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a>

---

##### `putGenerativeSafetySettings` <a name="putGenerativeSafetySettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putGenerativeSafetySettings"></a>

```typescript
public putGenerativeSafetySettings(value: GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putGenerativeSafetySettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

---

##### `putKnowledgeConnectorSettings` <a name="putKnowledgeConnectorSettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putKnowledgeConnectorSettings"></a>

```typescript
public putKnowledgeConnectorSettings(value: GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putKnowledgeConnectorSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

---

##### `putLlmModelSettings` <a name="putLlmModelSettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putLlmModelSettings"></a>

```typescript
public putLlmModelSettings(value: GoogleDialogflowCxGenerativeSettingsLlmModelSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putLlmModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDialogflowCxGenerativeSettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>

---

##### `resetFallbackSettings` <a name="resetFallbackSettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetFallbackSettings"></a>

```typescript
public resetFallbackSettings(): void
```

##### `resetGenerativeSafetySettings` <a name="resetGenerativeSafetySettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetGenerativeSafetySettings"></a>

```typescript
public resetGenerativeSafetySettings(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKnowledgeConnectorSettings` <a name="resetKnowledgeConnectorSettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetKnowledgeConnectorSettings"></a>

```typescript
public resetKnowledgeConnectorSettings(): void
```

##### `resetLlmModelSettings` <a name="resetLlmModelSettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetLlmModelSettings"></a>

```typescript
public resetLlmModelSettings(): void
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDialogflowCxGenerativeSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isConstruct"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformElement"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformResource"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDialogflowCxGenerativeSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowCxGenerativeSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowCxGenerativeSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxGenerativeSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fallbackSettings">fallbackSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.generativeSafetySettings">generativeSafetySettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.knowledgeConnectorSettings">knowledgeConnectorSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference">GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fallbackSettingsInput">fallbackSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.generativeSafetySettingsInput">generativeSafetySettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.knowledgeConnectorSettingsInput">knowledgeConnectorSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.llmModelSettingsInput">llmModelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fallbackSettings`<sup>Required</sup> <a name="fallbackSettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fallbackSettings"></a>

```typescript
public readonly fallbackSettings: GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference</a>

---

##### `generativeSafetySettings`<sup>Required</sup> <a name="generativeSafetySettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.generativeSafetySettings"></a>

```typescript
public readonly generativeSafetySettings: GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference</a>

---

##### `knowledgeConnectorSettings`<sup>Required</sup> <a name="knowledgeConnectorSettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.knowledgeConnectorSettings"></a>

```typescript
public readonly knowledgeConnectorSettings: GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference</a>

---

##### `llmModelSettings`<sup>Required</sup> <a name="llmModelSettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.llmModelSettings"></a>

```typescript
public readonly llmModelSettings: GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference">GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference">GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference</a>

---

##### `fallbackSettingsInput`<sup>Optional</sup> <a name="fallbackSettingsInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.fallbackSettingsInput"></a>

```typescript
public readonly fallbackSettingsInput: GoogleDialogflowCxGenerativeSettingsFallbackSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a>

---

##### `generativeSafetySettingsInput`<sup>Optional</sup> <a name="generativeSafetySettingsInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.generativeSafetySettingsInput"></a>

```typescript
public readonly generativeSafetySettingsInput: GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `knowledgeConnectorSettingsInput`<sup>Optional</sup> <a name="knowledgeConnectorSettingsInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.knowledgeConnectorSettingsInput"></a>

```typescript
public readonly knowledgeConnectorSettingsInput: GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `llmModelSettingsInput`<sup>Optional</sup> <a name="llmModelSettingsInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.llmModelSettingsInput"></a>

```typescript
public readonly llmModelSettingsInput: GoogleDialogflowCxGenerativeSettingsLlmModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDialogflowCxGenerativeSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxGenerativeSettingsConfig <a name="GoogleDialogflowCxGenerativeSettingsConfig" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.Initializer"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

const googleDialogflowCxGenerativeSettingsConfig: googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.languageCode">languageCode</a></code> | <code>string</code> | Language for this settings. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.fallbackSettings">fallbackSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a></code> | fallback_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.generativeSafetySettings">generativeSafetySettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a></code> | generative_safety_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#id GoogleDialogflowCxGenerativeSettings#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.knowledgeConnectorSettings">knowledgeConnectorSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a></code> | knowledge_connector_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.parent">parent</a></code> | <code>string</code> | The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

Language for this settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#language_code GoogleDialogflowCxGenerativeSettings#language_code}

---

##### `fallbackSettings`<sup>Optional</sup> <a name="fallbackSettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.fallbackSettings"></a>

```typescript
public readonly fallbackSettings: GoogleDialogflowCxGenerativeSettingsFallbackSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a>

fallback_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#fallback_settings GoogleDialogflowCxGenerativeSettings#fallback_settings}

---

##### `generativeSafetySettings`<sup>Optional</sup> <a name="generativeSafetySettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.generativeSafetySettings"></a>

```typescript
public readonly generativeSafetySettings: GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

generative_safety_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#generative_safety_settings GoogleDialogflowCxGenerativeSettings#generative_safety_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#id GoogleDialogflowCxGenerativeSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `knowledgeConnectorSettings`<sup>Optional</sup> <a name="knowledgeConnectorSettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.knowledgeConnectorSettings"></a>

```typescript
public readonly knowledgeConnectorSettings: GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

knowledge_connector_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#knowledge_connector_settings GoogleDialogflowCxGenerativeSettings#knowledge_connector_settings}

---

##### `llmModelSettings`<sup>Optional</sup> <a name="llmModelSettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.llmModelSettings"></a>

```typescript
public readonly llmModelSettings: GoogleDialogflowCxGenerativeSettingsLlmModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#llm_model_settings GoogleDialogflowCxGenerativeSettings#llm_model_settings}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#parent GoogleDialogflowCxGenerativeSettings#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowCxGenerativeSettingsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#timeouts GoogleDialogflowCxGenerativeSettings#timeouts}

---

### GoogleDialogflowCxGenerativeSettingsFallbackSettings <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.Initializer"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

const googleDialogflowCxGenerativeSettingsFallbackSettings: googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.property.promptTemplates">promptTemplates</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]</code> | prompt_templates block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.property.selectedPrompt">selectedPrompt</a></code> | <code>string</code> | Display name of the selected prompt. |

---

##### `promptTemplates`<sup>Optional</sup> <a name="promptTemplates" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.property.promptTemplates"></a>

```typescript
public readonly promptTemplates: IResolvable | GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]

prompt_templates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#prompt_templates GoogleDialogflowCxGenerativeSettings#prompt_templates}

---

##### `selectedPrompt`<sup>Optional</sup> <a name="selectedPrompt" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings.property.selectedPrompt"></a>

```typescript
public readonly selectedPrompt: string;
```

- *Type:* string

Display name of the selected prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#selected_prompt GoogleDialogflowCxGenerativeSettings#selected_prompt}

---

### GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.Initializer"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

const googleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates: googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.displayName">displayName</a></code> | <code>string</code> | Prompt name. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.frozen">frozen</a></code> | <code>boolean \| cdktn.IResolvable</code> | If the flag is true, the prompt is frozen and cannot be modified by users. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.promptText">promptText</a></code> | <code>string</code> | Prompt text that is sent to a LLM on no-match default, placeholders are filled downstream. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Prompt name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#display_name GoogleDialogflowCxGenerativeSettings#display_name}

---

##### `frozen`<sup>Optional</sup> <a name="frozen" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.frozen"></a>

```typescript
public readonly frozen: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If the flag is true, the prompt is frozen and cannot be modified by users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#frozen GoogleDialogflowCxGenerativeSettings#frozen}

---

##### `promptText`<sup>Optional</sup> <a name="promptText" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.promptText"></a>

```typescript
public readonly promptText: string;
```

- *Type:* string

Prompt text that is sent to a LLM on no-match default, placeholders are filled downstream.

For example: "Here is a conversation $conversation, a response is: "

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#prompt_text GoogleDialogflowCxGenerativeSettings#prompt_text}

---

### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.Initializer"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

const googleDialogflowCxGenerativeSettingsGenerativeSafetySettings: googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.property.bannedPhrases">bannedPhrases</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]</code> | banned_phrases block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.property.defaultBannedPhraseMatchStrategy">defaultBannedPhraseMatchStrategy</a></code> | <code>string</code> | Optional. Default phrase match strategy for banned phrases. See [PhraseMatchStrategy](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/GenerativeSettings#phrasematchstrategy) for valid values. |

---

##### `bannedPhrases`<sup>Optional</sup> <a name="bannedPhrases" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.property.bannedPhrases"></a>

```typescript
public readonly bannedPhrases: IResolvable | GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]

banned_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#banned_phrases GoogleDialogflowCxGenerativeSettings#banned_phrases}

---

##### `defaultBannedPhraseMatchStrategy`<sup>Optional</sup> <a name="defaultBannedPhraseMatchStrategy" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings.property.defaultBannedPhraseMatchStrategy"></a>

```typescript
public readonly defaultBannedPhraseMatchStrategy: string;
```

- *Type:* string

Optional. Default phrase match strategy for banned phrases. See [PhraseMatchStrategy](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/GenerativeSettings#phrasematchstrategy) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#default_banned_phrase_match_strategy GoogleDialogflowCxGenerativeSettings#default_banned_phrase_match_strategy}

---

### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.Initializer"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

const googleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases: googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.languageCode">languageCode</a></code> | <code>string</code> | Language code of the phrase. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.text">text</a></code> | <code>string</code> | Text input which can be used for prompt or banned phrases. |

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

Language code of the phrase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#language_code GoogleDialogflowCxGenerativeSettings#language_code}

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Text input which can be used for prompt or banned phrases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#text GoogleDialogflowCxGenerativeSettings#text}

---

### GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings <a name="GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.Initializer"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

const googleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings: googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agent">agent</a></code> | <code>string</code> | Name of the virtual agent. Used for LLM prompt. Can be left empty. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentIdentity">agentIdentity</a></code> | <code>string</code> | Identity of the agent, e.g. "virtual agent", "AI assistant". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentScope">agentScope</a></code> | <code>string</code> | Agent scope, e.g. "Example company website", "internal Example company website for employees", "manual of car owner". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.business">business</a></code> | <code>string</code> | Name of the company, organization or other entity that the agent represents. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.businessDescription">businessDescription</a></code> | <code>string</code> | Company description, used for LLM prompt, e.g. "a family company selling freshly roasted coffee beans".''. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.disableDataStoreFallback">disableDataStoreFallback</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to disable fallback to Data Store search results (in case the LLM couldn't pick a proper answer). |

---

##### `agent`<sup>Optional</sup> <a name="agent" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agent"></a>

```typescript
public readonly agent: string;
```

- *Type:* string

Name of the virtual agent. Used for LLM prompt. Can be left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#agent GoogleDialogflowCxGenerativeSettings#agent}

---

##### `agentIdentity`<sup>Optional</sup> <a name="agentIdentity" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentIdentity"></a>

```typescript
public readonly agentIdentity: string;
```

- *Type:* string

Identity of the agent, e.g. "virtual agent", "AI assistant".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#agent_identity GoogleDialogflowCxGenerativeSettings#agent_identity}

---

##### `agentScope`<sup>Optional</sup> <a name="agentScope" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentScope"></a>

```typescript
public readonly agentScope: string;
```

- *Type:* string

Agent scope, e.g. "Example company website", "internal Example company website for employees", "manual of car owner".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#agent_scope GoogleDialogflowCxGenerativeSettings#agent_scope}

---

##### `business`<sup>Optional</sup> <a name="business" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.business"></a>

```typescript
public readonly business: string;
```

- *Type:* string

Name of the company, organization or other entity that the agent represents.

Used for knowledge connector LLM prompt and for knowledge search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#business GoogleDialogflowCxGenerativeSettings#business}

---

##### `businessDescription`<sup>Optional</sup> <a name="businessDescription" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.businessDescription"></a>

```typescript
public readonly businessDescription: string;
```

- *Type:* string

Company description, used for LLM prompt, e.g. "a family company selling freshly roasted coffee beans".''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#business_description GoogleDialogflowCxGenerativeSettings#business_description}

---

##### `disableDataStoreFallback`<sup>Optional</sup> <a name="disableDataStoreFallback" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.disableDataStoreFallback"></a>

```typescript
public readonly disableDataStoreFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to disable fallback to Data Store search results (in case the LLM couldn't pick a proper answer).

Per default the feature is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#disable_data_store_fallback GoogleDialogflowCxGenerativeSettings#disable_data_store_fallback}

---

### GoogleDialogflowCxGenerativeSettingsLlmModelSettings <a name="GoogleDialogflowCxGenerativeSettingsLlmModelSettings" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.Initializer"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

const googleDialogflowCxGenerativeSettingsLlmModelSettings: googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.property.model">model</a></code> | <code>string</code> | The selected LLM model. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.property.promptText">promptText</a></code> | <code>string</code> | The custom prompt to use. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#model GoogleDialogflowCxGenerativeSettings#model}

---

##### `promptText`<sup>Optional</sup> <a name="promptText" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings.property.promptText"></a>

```typescript
public readonly promptText: string;
```

- *Type:* string

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#prompt_text GoogleDialogflowCxGenerativeSettings#prompt_text}

---

### GoogleDialogflowCxGenerativeSettingsTimeouts <a name="GoogleDialogflowCxGenerativeSettingsTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.Initializer"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

const googleDialogflowCxGenerativeSettingsTimeouts: googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#create GoogleDialogflowCxGenerativeSettings#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#delete GoogleDialogflowCxGenerativeSettings#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#update GoogleDialogflowCxGenerativeSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#create GoogleDialogflowCxGenerativeSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#delete GoogleDialogflowCxGenerativeSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dialogflow_cx_generative_settings#update GoogleDialogflowCxGenerativeSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

new googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.putPromptTemplates">putPromptTemplates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetPromptTemplates">resetPromptTemplates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetSelectedPrompt">resetSelectedPrompt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPromptTemplates` <a name="putPromptTemplates" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.putPromptTemplates"></a>

```typescript
public putPromptTemplates(value: IResolvable | GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.putPromptTemplates.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]

---

##### `resetPromptTemplates` <a name="resetPromptTemplates" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetPromptTemplates"></a>

```typescript
public resetPromptTemplates(): void
```

##### `resetSelectedPrompt` <a name="resetSelectedPrompt" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetSelectedPrompt"></a>

```typescript
public resetSelectedPrompt(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplates">promptTemplates</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplatesInput">promptTemplatesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPromptInput">selectedPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPrompt">selectedPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `promptTemplates`<sup>Required</sup> <a name="promptTemplates" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplates"></a>

```typescript
public readonly promptTemplates: GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList</a>

---

##### `promptTemplatesInput`<sup>Optional</sup> <a name="promptTemplatesInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplatesInput"></a>

```typescript
public readonly promptTemplatesInput: IResolvable | GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]

---

##### `selectedPromptInput`<sup>Optional</sup> <a name="selectedPromptInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPromptInput"></a>

```typescript
public readonly selectedPromptInput: string;
```

- *Type:* string

---

##### `selectedPrompt`<sup>Required</sup> <a name="selectedPrompt" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPrompt"></a>

```typescript
public readonly selectedPrompt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxGenerativeSettingsFallbackSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettings">GoogleDialogflowCxGenerativeSettingsFallbackSettings</a>

---


### GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

new googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.get"></a>

```typescript
public get(index: number): GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]

---


### GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference <a name="GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

new googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetFrozen">resetFrozen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetPromptText">resetPromptText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFrozen` <a name="resetFrozen" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetFrozen"></a>

```typescript
public resetFrozen(): void
```

##### `resetPromptText` <a name="resetPromptText" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetPromptText"></a>

```typescript
public resetPromptText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozenInput">frozenInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptTextInput">promptTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozen">frozen</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptText">promptText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `frozenInput`<sup>Optional</sup> <a name="frozenInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozenInput"></a>

```typescript
public readonly frozenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `promptTextInput`<sup>Optional</sup> <a name="promptTextInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptTextInput"></a>

```typescript
public readonly promptTextInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `frozen`<sup>Required</sup> <a name="frozen" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozen"></a>

```typescript
public readonly frozen: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptText"></a>

```typescript
public readonly promptText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">GoogleDialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>

---


### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

new googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.get"></a>

```typescript
public get(index: number): GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]

---


### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

new googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>

---


### GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

new googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.putBannedPhrases">putBannedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetBannedPhrases">resetBannedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetDefaultBannedPhraseMatchStrategy">resetDefaultBannedPhraseMatchStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBannedPhrases` <a name="putBannedPhrases" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.putBannedPhrases"></a>

```typescript
public putBannedPhrases(value: IResolvable | GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.putBannedPhrases.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]

---

##### `resetBannedPhrases` <a name="resetBannedPhrases" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetBannedPhrases"></a>

```typescript
public resetBannedPhrases(): void
```

##### `resetDefaultBannedPhraseMatchStrategy` <a name="resetDefaultBannedPhraseMatchStrategy" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetDefaultBannedPhraseMatchStrategy"></a>

```typescript
public resetDefaultBannedPhraseMatchStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrases">bannedPhrases</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrasesInput">bannedPhrasesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategyInput">defaultBannedPhraseMatchStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategy">defaultBannedPhraseMatchStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bannedPhrases`<sup>Required</sup> <a name="bannedPhrases" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrases"></a>

```typescript
public readonly bannedPhrases: GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList</a>

---

##### `bannedPhrasesInput`<sup>Optional</sup> <a name="bannedPhrasesInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrasesInput"></a>

```typescript
public readonly bannedPhrasesInput: IResolvable | GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]

---

##### `defaultBannedPhraseMatchStrategyInput`<sup>Optional</sup> <a name="defaultBannedPhraseMatchStrategyInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategyInput"></a>

```typescript
public readonly defaultBannedPhraseMatchStrategyInput: string;
```

- *Type:* string

---

##### `defaultBannedPhraseMatchStrategy`<sup>Required</sup> <a name="defaultBannedPhraseMatchStrategy" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategy"></a>

```typescript
public readonly defaultBannedPhraseMatchStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings">GoogleDialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

---


### GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

new googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgent">resetAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentIdentity">resetAgentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentScope">resetAgentScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusiness">resetBusiness</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusinessDescription">resetBusinessDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetDisableDataStoreFallback">resetDisableDataStoreFallback</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAgent` <a name="resetAgent" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgent"></a>

```typescript
public resetAgent(): void
```

##### `resetAgentIdentity` <a name="resetAgentIdentity" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentIdentity"></a>

```typescript
public resetAgentIdentity(): void
```

##### `resetAgentScope` <a name="resetAgentScope" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentScope"></a>

```typescript
public resetAgentScope(): void
```

##### `resetBusiness` <a name="resetBusiness" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusiness"></a>

```typescript
public resetBusiness(): void
```

##### `resetBusinessDescription` <a name="resetBusinessDescription" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusinessDescription"></a>

```typescript
public resetBusinessDescription(): void
```

##### `resetDisableDataStoreFallback` <a name="resetDisableDataStoreFallback" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetDisableDataStoreFallback"></a>

```typescript
public resetDisableDataStoreFallback(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentityInput">agentIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentInput">agentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScopeInput">agentScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescriptionInput">businessDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessInput">businessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallbackInput">disableDataStoreFallbackInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agent">agent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentity">agentIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScope">agentScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.business">business</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescription">businessDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallback">disableDataStoreFallback</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentIdentityInput`<sup>Optional</sup> <a name="agentIdentityInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentityInput"></a>

```typescript
public readonly agentIdentityInput: string;
```

- *Type:* string

---

##### `agentInput`<sup>Optional</sup> <a name="agentInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentInput"></a>

```typescript
public readonly agentInput: string;
```

- *Type:* string

---

##### `agentScopeInput`<sup>Optional</sup> <a name="agentScopeInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScopeInput"></a>

```typescript
public readonly agentScopeInput: string;
```

- *Type:* string

---

##### `businessDescriptionInput`<sup>Optional</sup> <a name="businessDescriptionInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescriptionInput"></a>

```typescript
public readonly businessDescriptionInput: string;
```

- *Type:* string

---

##### `businessInput`<sup>Optional</sup> <a name="businessInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessInput"></a>

```typescript
public readonly businessInput: string;
```

- *Type:* string

---

##### `disableDataStoreFallbackInput`<sup>Optional</sup> <a name="disableDataStoreFallbackInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallbackInput"></a>

```typescript
public readonly disableDataStoreFallbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agent"></a>

```typescript
public readonly agent: string;
```

- *Type:* string

---

##### `agentIdentity`<sup>Required</sup> <a name="agentIdentity" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentity"></a>

```typescript
public readonly agentIdentity: string;
```

- *Type:* string

---

##### `agentScope`<sup>Required</sup> <a name="agentScope" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScope"></a>

```typescript
public readonly agentScope: string;
```

- *Type:* string

---

##### `business`<sup>Required</sup> <a name="business" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.business"></a>

```typescript
public readonly business: string;
```

- *Type:* string

---

##### `businessDescription`<sup>Required</sup> <a name="businessDescription" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescription"></a>

```typescript
public readonly businessDescription: string;
```

- *Type:* string

---

##### `disableDataStoreFallback`<sup>Required</sup> <a name="disableDataStoreFallback" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallback"></a>

```typescript
public readonly disableDataStoreFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings">GoogleDialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

---


### GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

new googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetPromptText">resetPromptText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetPromptText` <a name="resetPromptText" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetPromptText"></a>

```typescript
public resetPromptText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptTextInput">promptTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptText">promptText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `promptTextInput`<sup>Optional</sup> <a name="promptTextInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptTextInput"></a>

```typescript
public readonly promptTextInput: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptText"></a>

```typescript
public readonly promptText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowCxGenerativeSettingsLlmModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsLlmModelSettings">GoogleDialogflowCxGenerativeSettingsLlmModelSettings</a>

---


### GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference <a name="GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowCxGenerativeSettings } from '@cdktn/provider-google-beta'

new googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowCxGenerativeSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowCxGenerativeSettings.GoogleDialogflowCxGenerativeSettingsTimeouts">GoogleDialogflowCxGenerativeSettingsTimeouts</a>

---



