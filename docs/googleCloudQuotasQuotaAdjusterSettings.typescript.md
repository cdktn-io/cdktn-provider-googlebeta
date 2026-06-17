# `googleCloudQuotasQuotaAdjusterSettings` Submodule <a name="`googleCloudQuotasQuotaAdjusterSettings` Submodule" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudQuotasQuotaAdjusterSettings <a name="GoogleCloudQuotasQuotaAdjusterSettings" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_quotas_quota_adjuster_settings google_cloud_quotas_quota_adjuster_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer"></a>

```typescript
import { googleCloudQuotasQuotaAdjusterSettings } from '@cdktn/provider-google-beta'

new googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings(scope: Construct, id: string, config: GoogleCloudQuotasQuotaAdjusterSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig">GoogleCloudQuotasQuotaAdjusterSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig">GoogleCloudQuotasQuotaAdjusterSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCloudQuotasQuotaAdjusterSettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts">GoogleCloudQuotasQuotaAdjusterSettingsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudQuotasQuotaAdjusterSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isConstruct"></a>

```typescript
import { googleCloudQuotasQuotaAdjusterSettings } from '@cdktn/provider-google-beta'

googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformElement"></a>

```typescript
import { googleCloudQuotasQuotaAdjusterSettings } from '@cdktn/provider-google-beta'

googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformResource"></a>

```typescript
import { googleCloudQuotasQuotaAdjusterSettings } from '@cdktn/provider-google-beta'

googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport"></a>

```typescript
import { googleCloudQuotasQuotaAdjusterSettings } from '@cdktn/provider-google-beta'

googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleCloudQuotasQuotaAdjusterSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudQuotasQuotaAdjusterSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudQuotasQuotaAdjusterSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudQuotasQuotaAdjusterSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.effectiveContainer">effectiveContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.effectiveEnablement">effectiveEnablement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.inherited">inherited</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.inheritedFrom">inheritedFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference">GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.enablementInput">enablementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts">GoogleCloudQuotasQuotaAdjusterSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.enablement">enablement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `effectiveContainer`<sup>Required</sup> <a name="effectiveContainer" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.effectiveContainer"></a>

```typescript
public readonly effectiveContainer: string;
```

- *Type:* string

---

##### `effectiveEnablement`<sup>Required</sup> <a name="effectiveEnablement" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.effectiveEnablement"></a>

```typescript
public readonly effectiveEnablement: string;
```

- *Type:* string

---

##### `inherited`<sup>Required</sup> <a name="inherited" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.inherited"></a>

```typescript
public readonly inherited: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `inheritedFrom`<sup>Required</sup> <a name="inheritedFrom" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.inheritedFrom"></a>

```typescript
public readonly inheritedFrom: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference">GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference</a>

---

##### `enablementInput`<sup>Optional</sup> <a name="enablementInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.enablementInput"></a>

```typescript
public readonly enablementInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCloudQuotasQuotaAdjusterSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts">GoogleCloudQuotasQuotaAdjusterSettingsTimeouts</a>

---

##### `enablement`<sup>Required</sup> <a name="enablement" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.enablement"></a>

```typescript
public readonly enablement: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudQuotasQuotaAdjusterSettingsConfig <a name="GoogleCloudQuotasQuotaAdjusterSettingsConfig" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.Initializer"></a>

```typescript
import { googleCloudQuotasQuotaAdjusterSettings } from '@cdktn/provider-google-beta'

const googleCloudQuotasQuotaAdjusterSettingsConfig: googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.enablement">enablement</a></code> | <code>string</code> | Required. The configured value of the enablement at the given resource. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#id GoogleCloudQuotasQuotaAdjusterSettings#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.parent">parent</a></code> | <code>string</code> | The parent of the quota preference. Allowed parent format is "projects/[project-id / number]". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts">GoogleCloudQuotasQuotaAdjusterSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `enablement`<sup>Required</sup> <a name="enablement" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.enablement"></a>

```typescript
public readonly enablement: string;
```

- *Type:* string

Required. The configured value of the enablement at the given resource. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#enablement GoogleCloudQuotasQuotaAdjusterSettings#enablement}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#id GoogleCloudQuotasQuotaAdjusterSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of the quota preference. Allowed parent format is "projects/[project-id / number]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#parent GoogleCloudQuotasQuotaAdjusterSettings#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudQuotasQuotaAdjusterSettingsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts">GoogleCloudQuotasQuotaAdjusterSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#timeouts GoogleCloudQuotasQuotaAdjusterSettings#timeouts}

---

### GoogleCloudQuotasQuotaAdjusterSettingsTimeouts <a name="GoogleCloudQuotasQuotaAdjusterSettingsTimeouts" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.Initializer"></a>

```typescript
import { googleCloudQuotasQuotaAdjusterSettings } from '@cdktn/provider-google-beta'

const googleCloudQuotasQuotaAdjusterSettingsTimeouts: googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#create GoogleCloudQuotasQuotaAdjusterSettings#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#delete GoogleCloudQuotasQuotaAdjusterSettings#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#update GoogleCloudQuotasQuotaAdjusterSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#create GoogleCloudQuotasQuotaAdjusterSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#delete GoogleCloudQuotasQuotaAdjusterSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_quotas_quota_adjuster_settings#update GoogleCloudQuotasQuotaAdjusterSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference <a name="GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCloudQuotasQuotaAdjusterSettings } from '@cdktn/provider-google-beta'

new googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts">GoogleCloudQuotasQuotaAdjusterSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudQuotasQuotaAdjusterSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaAdjusterSettings.GoogleCloudQuotasQuotaAdjusterSettingsTimeouts">GoogleCloudQuotasQuotaAdjusterSettingsTimeouts</a>

---



