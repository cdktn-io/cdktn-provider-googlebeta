# `googleDialogflowEnvironment` Submodule <a name="`googleDialogflowEnvironment` Submodule" id="@cdktn/provider-google-beta.googleDialogflowEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowEnvironment <a name="GoogleDialogflowEnvironment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment google_dialogflow_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

new googleDialogflowEnvironment.GoogleDialogflowEnvironment(scope: Construct, id: string, config: GoogleDialogflowEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig">GoogleDialogflowEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig">GoogleDialogflowEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putFulfillment">putFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putTextToSpeechSettings">putTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetAgentVersion">resetAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetFulfillment">resetFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetTextToSpeechSettings">resetTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFulfillment` <a name="putFulfillment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putFulfillment"></a>

```typescript
public putFulfillment(value: GoogleDialogflowEnvironmentFulfillment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a>

---

##### `putTextToSpeechSettings` <a name="putTextToSpeechSettings" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putTextToSpeechSettings"></a>

```typescript
public putTextToSpeechSettings(value: GoogleDialogflowEnvironmentTextToSpeechSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putTextToSpeechSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDialogflowEnvironmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a>

---

##### `resetAgentVersion` <a name="resetAgentVersion" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetAgentVersion"></a>

```typescript
public resetAgentVersion(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFulfillment` <a name="resetFulfillment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetFulfillment"></a>

```typescript
public resetFulfillment(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTextToSpeechSettings` <a name="resetTextToSpeechSettings" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetTextToSpeechSettings"></a>

```typescript
public resetTextToSpeechSettings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDialogflowEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isConstruct"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

googleDialogflowEnvironment.GoogleDialogflowEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformElement"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformResource"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDialogflowEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.fulfillment">fulfillment</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference">GoogleDialogflowEnvironmentFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.textToSpeechSettings">textToSpeechSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference">GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference">GoogleDialogflowEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.agentVersionInput">agentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.environmentidInput">environmentidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.fulfillmentInput">fulfillmentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.textToSpeechSettingsInput">textToSpeechSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.agentVersion">agentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.environmentid">environmentid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fulfillment`<sup>Required</sup> <a name="fulfillment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.fulfillment"></a>

```typescript
public readonly fulfillment: GoogleDialogflowEnvironmentFulfillmentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference">GoogleDialogflowEnvironmentFulfillmentOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `textToSpeechSettings`<sup>Required</sup> <a name="textToSpeechSettings" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.textToSpeechSettings"></a>

```typescript
public readonly textToSpeechSettings: GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference">GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowEnvironmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference">GoogleDialogflowEnvironmentTimeoutsOutputReference</a>

---

##### `agentVersionInput`<sup>Optional</sup> <a name="agentVersionInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.agentVersionInput"></a>

```typescript
public readonly agentVersionInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `environmentidInput`<sup>Optional</sup> <a name="environmentidInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.environmentidInput"></a>

```typescript
public readonly environmentidInput: string;
```

- *Type:* string

---

##### `fulfillmentInput`<sup>Optional</sup> <a name="fulfillmentInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.fulfillmentInput"></a>

```typescript
public readonly fulfillmentInput: GoogleDialogflowEnvironmentFulfillment;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `textToSpeechSettingsInput`<sup>Optional</sup> <a name="textToSpeechSettingsInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.textToSpeechSettingsInput"></a>

```typescript
public readonly textToSpeechSettingsInput: GoogleDialogflowEnvironmentTextToSpeechSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDialogflowEnvironmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a>

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environmentid`<sup>Required</sup> <a name="environmentid" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.environmentid"></a>

```typescript
public readonly environmentid: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowEnvironmentConfig <a name="GoogleDialogflowEnvironmentConfig" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.Initializer"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

const googleDialogflowEnvironmentConfig: googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.environmentid">environmentid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#environmentid GoogleDialogflowEnvironment#environmentid}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.agentVersion">agentVersion</a></code> | <code>string</code> | The agent version loaded into this environment. Supported formats: - projects/<Project ID>/agent/versions/<Version ID> - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.description">description</a></code> | <code>string</code> | The developer-provided description for this environment. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.fulfillment">fulfillment</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a></code> | fulfillment block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#id GoogleDialogflowEnvironment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#location GoogleDialogflowEnvironment#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#project GoogleDialogflowEnvironment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.textToSpeechSettings">textToSpeechSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a></code> | text_to_speech_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `environmentid`<sup>Required</sup> <a name="environmentid" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.environmentid"></a>

```typescript
public readonly environmentid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#environmentid GoogleDialogflowEnvironment#environmentid}.

---

##### `agentVersion`<sup>Optional</sup> <a name="agentVersion" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

The agent version loaded into this environment. Supported formats: - projects/<Project ID>/agent/versions/<Version ID> - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#agent_version GoogleDialogflowEnvironment#agent_version}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#deletion_policy GoogleDialogflowEnvironment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The developer-provided description for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#description GoogleDialogflowEnvironment#description}

---

##### `fulfillment`<sup>Optional</sup> <a name="fulfillment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.fulfillment"></a>

```typescript
public readonly fulfillment: GoogleDialogflowEnvironmentFulfillment;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a>

fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#fulfillment GoogleDialogflowEnvironment#fulfillment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#id GoogleDialogflowEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#location GoogleDialogflowEnvironment#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#project GoogleDialogflowEnvironment#project}.

---

##### `textToSpeechSettings`<sup>Optional</sup> <a name="textToSpeechSettings" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.textToSpeechSettings"></a>

```typescript
public readonly textToSpeechSettings: GoogleDialogflowEnvironmentTextToSpeechSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a>

text_to_speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#text_to_speech_settings GoogleDialogflowEnvironment#text_to_speech_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDialogflowEnvironmentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#timeouts GoogleDialogflowEnvironment#timeouts}

---

### GoogleDialogflowEnvironmentFulfillment <a name="GoogleDialogflowEnvironmentFulfillment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.Initializer"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

const googleDialogflowEnvironmentFulfillment: googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the fulfillment, unique within the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.features">features</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures">GoogleDialogflowEnvironmentFulfillmentFeatures</a>[]</code> | features block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.genericWebService">genericWebService</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.name">name</a></code> | <code>string</code> | The unique identifier of the fulfillment. Supports the following formats: - projects/<Project ID>/agent/fulfillment - projects/<Project ID>/locations/<Location ID>/agent/fulfillment. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the fulfillment, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#display_name GoogleDialogflowEnvironment#display_name}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.features"></a>

```typescript
public readonly features: IResolvable | GoogleDialogflowEnvironmentFulfillmentFeatures[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures">GoogleDialogflowEnvironmentFulfillmentFeatures</a>[]

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#features GoogleDialogflowEnvironment#features}

---

##### `genericWebService`<sup>Optional</sup> <a name="genericWebService" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.genericWebService"></a>

```typescript
public readonly genericWebService: GoogleDialogflowEnvironmentFulfillmentGenericWebService;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#generic_web_service GoogleDialogflowEnvironment#generic_web_service}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The unique identifier of the fulfillment. Supports the following formats: - projects/<Project ID>/agent/fulfillment - projects/<Project ID>/locations/<Location ID>/agent/fulfillment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#name GoogleDialogflowEnvironment#name}

---

### GoogleDialogflowEnvironmentFulfillmentFeatures <a name="GoogleDialogflowEnvironmentFulfillmentFeatures" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures.Initializer"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

const googleDialogflowEnvironmentFulfillmentFeatures: googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures.property.type">type</a></code> | <code>string</code> | The type of the feature that enabled for fulfillment. Possible values: ["TYPE_UNSPECIFIED", "SMALLTALK"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the feature that enabled for fulfillment. Possible values: ["TYPE_UNSPECIFIED", "SMALLTALK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#type GoogleDialogflowEnvironment#type}

---

### GoogleDialogflowEnvironmentFulfillmentGenericWebService <a name="GoogleDialogflowEnvironmentFulfillmentGenericWebService" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.Initializer"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

const googleDialogflowEnvironmentFulfillmentGenericWebService: googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.uri">uri</a></code> | <code>string</code> | The fulfillment URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.password">password</a></code> | <code>string</code> | The password for HTTP Basic authentication. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.requestHeaders">requestHeaders</a></code> | <code>{[ key: string ]: string}</code> | The HTTP request headers to send together with fulfillment requests. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.username">username</a></code> | <code>string</code> | The user name for HTTP Basic authentication. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The fulfillment URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#uri GoogleDialogflowEnvironment#uri}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#password GoogleDialogflowEnvironment#password}

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The HTTP request headers to send together with fulfillment requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#request_headers GoogleDialogflowEnvironment#request_headers}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The user name for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#username GoogleDialogflowEnvironment#username}

---

### GoogleDialogflowEnvironmentTextToSpeechSettings <a name="GoogleDialogflowEnvironmentTextToSpeechSettings" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.Initializer"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

const googleDialogflowEnvironmentTextToSpeechSettings: googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.enableTextToSpeech">enableTextToSpeech</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether text to speech is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.outputAudioEncoding">outputAudioEncoding</a></code> | <code>string</code> | Audio encoding of the synthesized audio content. Possible values: ["OUTPUT_AUDIO_ENCODING_UNSPECIFIED", "OUTPUT_AUDIO_ENCODING_LINEAR_16", "OUTPUT_AUDIO_ENCODING_MP3", "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS", "OUTPUT_AUDIO_ENCODING_OGG_OPUS", "OUTPUT_AUDIO_ENCODING_MULAW", "OUTPUT_AUDIO_ENCODING_ALAW"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.sampleRateHertz">sampleRateHertz</a></code> | <code>number</code> | The synthesis sample rate (in hertz) for this audio. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.synthesizeSpeechConfigs">synthesizeSpeechConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>[]</code> | synthesize_speech_configs block. |

---

##### `enableTextToSpeech`<sup>Optional</sup> <a name="enableTextToSpeech" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.enableTextToSpeech"></a>

```typescript
public readonly enableTextToSpeech: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether text to speech is enabled.

Even when this field is false, other settings in this proto are still retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#enable_text_to_speech GoogleDialogflowEnvironment#enable_text_to_speech}

---

##### `outputAudioEncoding`<sup>Optional</sup> <a name="outputAudioEncoding" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.outputAudioEncoding"></a>

```typescript
public readonly outputAudioEncoding: string;
```

- *Type:* string

Audio encoding of the synthesized audio content. Possible values: ["OUTPUT_AUDIO_ENCODING_UNSPECIFIED", "OUTPUT_AUDIO_ENCODING_LINEAR_16", "OUTPUT_AUDIO_ENCODING_MP3", "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS", "OUTPUT_AUDIO_ENCODING_OGG_OPUS", "OUTPUT_AUDIO_ENCODING_MULAW", "OUTPUT_AUDIO_ENCODING_ALAW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#output_audio_encoding GoogleDialogflowEnvironment#output_audio_encoding}

---

##### `sampleRateHertz`<sup>Optional</sup> <a name="sampleRateHertz" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.sampleRateHertz"></a>

```typescript
public readonly sampleRateHertz: number;
```

- *Type:* number

The synthesis sample rate (in hertz) for this audio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#sample_rate_hertz GoogleDialogflowEnvironment#sample_rate_hertz}

---

##### `synthesizeSpeechConfigs`<sup>Optional</sup> <a name="synthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.synthesizeSpeechConfigs"></a>

```typescript
public readonly synthesizeSpeechConfigs: IResolvable | GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>[]

synthesize_speech_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#synthesize_speech_configs GoogleDialogflowEnvironment#synthesize_speech_configs}

---

### GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs <a name="GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.Initializer"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

const googleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs: googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.language">language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#language GoogleDialogflowEnvironment#language}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.effectsProfileId">effectsProfileId</a></code> | <code>string[]</code> | An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.pitch">pitch</a></code> | <code>number</code> | Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.speakingRate">speakingRate</a></code> | <code>number</code> | Speaking rate/speed, in the range [0.25, 4.0]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.voice">voice</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a></code> | voice block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.volumeGainDb">volumeGainDb</a></code> | <code>number</code> | Volume gain (in dB) of the normal native volume supported by the specific voice. |

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#language GoogleDialogflowEnvironment#language}.

---

##### `effectsProfileId`<sup>Optional</sup> <a name="effectsProfileId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.effectsProfileId"></a>

```typescript
public readonly effectsProfileId: string[];
```

- *Type:* string[]

An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech.

Effects are applied on top of each other in the order they are given.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#effects_profile_id GoogleDialogflowEnvironment#effects_profile_id}

---

##### `pitch`<sup>Optional</sup> <a name="pitch" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.pitch"></a>

```typescript
public readonly pitch: number;
```

- *Type:* number

Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#pitch GoogleDialogflowEnvironment#pitch}

---

##### `speakingRate`<sup>Optional</sup> <a name="speakingRate" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.speakingRate"></a>

```typescript
public readonly speakingRate: number;
```

- *Type:* number

Speaking rate/speed, in the range [0.25, 4.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#speaking_rate GoogleDialogflowEnvironment#speaking_rate}

---

##### `voice`<sup>Optional</sup> <a name="voice" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.voice"></a>

```typescript
public readonly voice: GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

voice block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#voice GoogleDialogflowEnvironment#voice}

---

##### `volumeGainDb`<sup>Optional</sup> <a name="volumeGainDb" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.volumeGainDb"></a>

```typescript
public readonly volumeGainDb: number;
```

- *Type:* number

Volume gain (in dB) of the normal native volume supported by the specific voice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#volume_gain_db GoogleDialogflowEnvironment#volume_gain_db}

---

### GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice <a name="GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.Initializer"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

const googleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice: googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.name">name</a></code> | <code>string</code> | The name of the voice. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.ssmlGender">ssmlGender</a></code> | <code>string</code> | The preferred gender of the voice. Possible values: ["SSML_VOICE_GENDER_UNSPECIFIED", "SSML_VOICE_GENDER_MALE", "SSML_VOICE_GENDER_FEMALE", "SSML_VOICE_GENDER_NEUTRAL"]. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the voice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#name GoogleDialogflowEnvironment#name}

---

##### `ssmlGender`<sup>Optional</sup> <a name="ssmlGender" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.ssmlGender"></a>

```typescript
public readonly ssmlGender: string;
```

- *Type:* string

The preferred gender of the voice. Possible values: ["SSML_VOICE_GENDER_UNSPECIFIED", "SSML_VOICE_GENDER_MALE", "SSML_VOICE_GENDER_FEMALE", "SSML_VOICE_GENDER_NEUTRAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#ssml_gender GoogleDialogflowEnvironment#ssml_gender}

---

### GoogleDialogflowEnvironmentTimeouts <a name="GoogleDialogflowEnvironmentTimeouts" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.Initializer"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

const googleDialogflowEnvironmentTimeouts: googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#create GoogleDialogflowEnvironment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#delete GoogleDialogflowEnvironment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#update GoogleDialogflowEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#create GoogleDialogflowEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#delete GoogleDialogflowEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#update GoogleDialogflowEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowEnvironmentFulfillmentFeaturesList <a name="GoogleDialogflowEnvironmentFulfillmentFeaturesList" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

new googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.get"></a>

```typescript
public get(index: number): GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures">GoogleDialogflowEnvironmentFulfillmentFeatures</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowEnvironmentFulfillmentFeatures[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures">GoogleDialogflowEnvironmentFulfillmentFeatures</a>[]

---


### GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference <a name="GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

new googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures">GoogleDialogflowEnvironmentFulfillmentFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowEnvironmentFulfillmentFeatures;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures">GoogleDialogflowEnvironmentFulfillmentFeatures</a>

---


### GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference <a name="GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

new googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetRequestHeaders">resetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetRequestHeaders` <a name="resetRequestHeaders" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetRequestHeaders"></a>

```typescript
public resetRequestHeaders(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput">requestHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeaders">requestHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `requestHeadersInput`<sup>Optional</sup> <a name="requestHeadersInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```typescript
public readonly requestHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeaders"></a>

```typescript
public readonly requestHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowEnvironmentFulfillmentGenericWebService;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a>

---


### GoogleDialogflowEnvironmentFulfillmentOutputReference <a name="GoogleDialogflowEnvironmentFulfillmentOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.Initializer"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

new googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.putFeatures">putFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.putGenericWebService">putGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetFeatures">resetFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetGenericWebService">resetGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFeatures` <a name="putFeatures" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.putFeatures"></a>

```typescript
public putFeatures(value: IResolvable | GoogleDialogflowEnvironmentFulfillmentFeatures[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.putFeatures.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures">GoogleDialogflowEnvironmentFulfillmentFeatures</a>[]

---

##### `putGenericWebService` <a name="putGenericWebService" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.putGenericWebService"></a>

```typescript
public putGenericWebService(value: GoogleDialogflowEnvironmentFulfillmentGenericWebService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.putGenericWebService.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFeatures` <a name="resetFeatures" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetFeatures"></a>

```typescript
public resetFeatures(): void
```

##### `resetGenericWebService` <a name="resetGenericWebService" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetGenericWebService"></a>

```typescript
public resetGenericWebService(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.features">features</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList">GoogleDialogflowEnvironmentFulfillmentFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.genericWebService">genericWebService</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference">GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.featuresInput">featuresInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures">GoogleDialogflowEnvironmentFulfillmentFeatures</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.genericWebServiceInput">genericWebServiceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.features"></a>

```typescript
public readonly features: GoogleDialogflowEnvironmentFulfillmentFeaturesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList">GoogleDialogflowEnvironmentFulfillmentFeaturesList</a>

---

##### `genericWebService`<sup>Required</sup> <a name="genericWebService" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.genericWebService"></a>

```typescript
public readonly genericWebService: GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference">GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `featuresInput`<sup>Optional</sup> <a name="featuresInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.featuresInput"></a>

```typescript
public readonly featuresInput: IResolvable | GoogleDialogflowEnvironmentFulfillmentFeatures[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures">GoogleDialogflowEnvironmentFulfillmentFeatures</a>[]

---

##### `genericWebServiceInput`<sup>Optional</sup> <a name="genericWebServiceInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.genericWebServiceInput"></a>

```typescript
public readonly genericWebServiceInput: GoogleDialogflowEnvironmentFulfillmentGenericWebService;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowEnvironmentFulfillment;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a>

---


### GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference <a name="GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

new googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.putSynthesizeSpeechConfigs">putSynthesizeSpeechConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetEnableTextToSpeech">resetEnableTextToSpeech</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetOutputAudioEncoding">resetOutputAudioEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSampleRateHertz">resetSampleRateHertz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs">resetSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSynthesizeSpeechConfigs` <a name="putSynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.putSynthesizeSpeechConfigs"></a>

```typescript
public putSynthesizeSpeechConfigs(value: IResolvable | GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.putSynthesizeSpeechConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>[]

---

##### `resetEnableTextToSpeech` <a name="resetEnableTextToSpeech" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetEnableTextToSpeech"></a>

```typescript
public resetEnableTextToSpeech(): void
```

##### `resetOutputAudioEncoding` <a name="resetOutputAudioEncoding" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetOutputAudioEncoding"></a>

```typescript
public resetOutputAudioEncoding(): void
```

##### `resetSampleRateHertz` <a name="resetSampleRateHertz" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSampleRateHertz"></a>

```typescript
public resetSampleRateHertz(): void
```

##### `resetSynthesizeSpeechConfigs` <a name="resetSynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs"></a>

```typescript
public resetSynthesizeSpeechConfigs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs">synthesizeSpeechConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeechInput">enableTextToSpeechInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncodingInput">outputAudioEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertzInput">sampleRateHertzInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput">synthesizeSpeechConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeech">enableTextToSpeech</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncoding">outputAudioEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertz">sampleRateHertz</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `synthesizeSpeechConfigs`<sup>Required</sup> <a name="synthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs"></a>

```typescript
public readonly synthesizeSpeechConfigs: GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList</a>

---

##### `enableTextToSpeechInput`<sup>Optional</sup> <a name="enableTextToSpeechInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeechInput"></a>

```typescript
public readonly enableTextToSpeechInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `outputAudioEncodingInput`<sup>Optional</sup> <a name="outputAudioEncodingInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncodingInput"></a>

```typescript
public readonly outputAudioEncodingInput: string;
```

- *Type:* string

---

##### `sampleRateHertzInput`<sup>Optional</sup> <a name="sampleRateHertzInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertzInput"></a>

```typescript
public readonly sampleRateHertzInput: number;
```

- *Type:* number

---

##### `synthesizeSpeechConfigsInput`<sup>Optional</sup> <a name="synthesizeSpeechConfigsInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput"></a>

```typescript
public readonly synthesizeSpeechConfigsInput: IResolvable | GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>[]

---

##### `enableTextToSpeech`<sup>Required</sup> <a name="enableTextToSpeech" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeech"></a>

```typescript
public readonly enableTextToSpeech: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `outputAudioEncoding`<sup>Required</sup> <a name="outputAudioEncoding" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncoding"></a>

```typescript
public readonly outputAudioEncoding: string;
```

- *Type:* string

---

##### `sampleRateHertz`<sup>Required</sup> <a name="sampleRateHertz" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertz"></a>

```typescript
public readonly sampleRateHertz: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowEnvironmentTextToSpeechSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a>

---


### GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList <a name="GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

new googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.get"></a>

```typescript
public get(index: number): GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>[]

---


### GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference <a name="GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

new googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice">putVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetEffectsProfileId">resetEffectsProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetPitch">resetPitch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetSpeakingRate">resetSpeakingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVoice">resetVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVolumeGainDb">resetVolumeGainDb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVoice` <a name="putVoice" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice"></a>

```typescript
public putVoice(value: GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

---

##### `resetEffectsProfileId` <a name="resetEffectsProfileId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetEffectsProfileId"></a>

```typescript
public resetEffectsProfileId(): void
```

##### `resetPitch` <a name="resetPitch" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetPitch"></a>

```typescript
public resetPitch(): void
```

##### `resetSpeakingRate` <a name="resetSpeakingRate" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetSpeakingRate"></a>

```typescript
public resetSpeakingRate(): void
```

##### `resetVoice` <a name="resetVoice" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVoice"></a>

```typescript
public resetVoice(): void
```

##### `resetVolumeGainDb` <a name="resetVolumeGainDb" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVolumeGainDb"></a>

```typescript
public resetVolumeGainDb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voice">voice</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileIdInput">effectsProfileIdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitchInput">pitchInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRateInput">speakingRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voiceInput">voiceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDbInput">volumeGainDbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileId">effectsProfileId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitch">pitch</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRate">speakingRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDb">volumeGainDb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `voice`<sup>Required</sup> <a name="voice" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voice"></a>

```typescript
public readonly voice: GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference</a>

---

##### `effectsProfileIdInput`<sup>Optional</sup> <a name="effectsProfileIdInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileIdInput"></a>

```typescript
public readonly effectsProfileIdInput: string[];
```

- *Type:* string[]

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `pitchInput`<sup>Optional</sup> <a name="pitchInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitchInput"></a>

```typescript
public readonly pitchInput: number;
```

- *Type:* number

---

##### `speakingRateInput`<sup>Optional</sup> <a name="speakingRateInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRateInput"></a>

```typescript
public readonly speakingRateInput: number;
```

- *Type:* number

---

##### `voiceInput`<sup>Optional</sup> <a name="voiceInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voiceInput"></a>

```typescript
public readonly voiceInput: GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

---

##### `volumeGainDbInput`<sup>Optional</sup> <a name="volumeGainDbInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDbInput"></a>

```typescript
public readonly volumeGainDbInput: number;
```

- *Type:* number

---

##### `effectsProfileId`<sup>Required</sup> <a name="effectsProfileId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileId"></a>

```typescript
public readonly effectsProfileId: string[];
```

- *Type:* string[]

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `pitch`<sup>Required</sup> <a name="pitch" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitch"></a>

```typescript
public readonly pitch: number;
```

- *Type:* number

---

##### `speakingRate`<sup>Required</sup> <a name="speakingRate" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRate"></a>

```typescript
public readonly speakingRate: number;
```

- *Type:* number

---

##### `volumeGainDb`<sup>Required</sup> <a name="volumeGainDb" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDb"></a>

```typescript
public readonly volumeGainDb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>

---


### GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference <a name="GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

new googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetSsmlGender">resetSsmlGender</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSsmlGender` <a name="resetSsmlGender" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetSsmlGender"></a>

```typescript
public resetSsmlGender(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGenderInput">ssmlGenderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGender">ssmlGender</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ssmlGenderInput`<sup>Optional</sup> <a name="ssmlGenderInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGenderInput"></a>

```typescript
public readonly ssmlGenderInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ssmlGender`<sup>Required</sup> <a name="ssmlGender" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGender"></a>

```typescript
public readonly ssmlGender: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

---


### GoogleDialogflowEnvironmentTimeoutsOutputReference <a name="GoogleDialogflowEnvironmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDialogflowEnvironment } from '@cdktn/provider-google-beta'

new googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDialogflowEnvironmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a>

---



