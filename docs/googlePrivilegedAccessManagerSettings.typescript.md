# `googlePrivilegedAccessManagerSettings` Submodule <a name="`googlePrivilegedAccessManagerSettings` Submodule" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePrivilegedAccessManagerSettings <a name="GooglePrivilegedAccessManagerSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings google_privileged_access_manager_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

new googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings(scope: Construct, id: string, config: GooglePrivilegedAccessManagerSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig">GooglePrivilegedAccessManagerSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig">GooglePrivilegedAccessManagerSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putEmailNotificationSettings">putEmailNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putServiceAccountApproverSettings">putServiceAccountApproverSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetEmailNotificationSettings">resetEmailNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetServiceAccountApproverSettings">resetServiceAccountApproverSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEmailNotificationSettings` <a name="putEmailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putEmailNotificationSettings"></a>

```typescript
public putEmailNotificationSettings(value: GooglePrivilegedAccessManagerSettingsEmailNotificationSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putEmailNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a>

---

##### `putServiceAccountApproverSettings` <a name="putServiceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putServiceAccountApproverSettings"></a>

```typescript
public putServiceAccountApproverSettings(value: GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putServiceAccountApproverSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putTimeouts"></a>

```typescript
public putTimeouts(value: GooglePrivilegedAccessManagerSettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a>

---

##### `resetEmailNotificationSettings` <a name="resetEmailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetEmailNotificationSettings"></a>

```typescript
public resetEmailNotificationSettings(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetServiceAccountApproverSettings` <a name="resetServiceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetServiceAccountApproverSettings"></a>

```typescript
public resetServiceAccountApproverSettings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GooglePrivilegedAccessManagerSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isConstruct"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformElement"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformResource"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GooglePrivilegedAccessManagerSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GooglePrivilegedAccessManagerSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GooglePrivilegedAccessManagerSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GooglePrivilegedAccessManagerSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.emailNotificationSettings">emailNotificationSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.serviceAccountApproverSettings">serviceAccountApproverSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference">GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.emailNotificationSettingsInput">emailNotificationSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.serviceAccountApproverSettingsInput">serviceAccountApproverSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `emailNotificationSettings`<sup>Required</sup> <a name="emailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.emailNotificationSettings"></a>

```typescript
public readonly emailNotificationSettings: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceAccountApproverSettings`<sup>Required</sup> <a name="serviceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.serviceAccountApproverSettings"></a>

```typescript
public readonly serviceAccountApproverSettings: GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.timeouts"></a>

```typescript
public readonly timeouts: GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference">GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `emailNotificationSettingsInput`<sup>Optional</sup> <a name="emailNotificationSettingsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.emailNotificationSettingsInput"></a>

```typescript
public readonly emailNotificationSettingsInput: GooglePrivilegedAccessManagerSettingsEmailNotificationSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `serviceAccountApproverSettingsInput`<sup>Optional</sup> <a name="serviceAccountApproverSettingsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.serviceAccountApproverSettingsInput"></a>

```typescript
public readonly serviceAccountApproverSettingsInput: GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GooglePrivilegedAccessManagerSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePrivilegedAccessManagerSettingsConfig <a name="GooglePrivilegedAccessManagerSettingsConfig" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.Initializer"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

const googlePrivilegedAccessManagerSettingsConfig: googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.location">location</a></code> | <code>string</code> | The region of the PAM settings resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.parent">parent</a></code> | <code>string</code> | Format: projects/{project-id\|project-number} or organizations/{organization-number} or folders/{folder-number}. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.emailNotificationSettings">emailNotificationSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a></code> | email_notification_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#id GooglePrivilegedAccessManagerSettings#id}. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.serviceAccountApproverSettings">serviceAccountApproverSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a></code> | service_account_approver_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The region of the PAM settings resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#location GooglePrivilegedAccessManagerSettings#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#parent GooglePrivilegedAccessManagerSettings#parent}

---

##### `emailNotificationSettings`<sup>Optional</sup> <a name="emailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.emailNotificationSettings"></a>

```typescript
public readonly emailNotificationSettings: GooglePrivilegedAccessManagerSettingsEmailNotificationSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a>

email_notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#email_notification_settings GooglePrivilegedAccessManagerSettings#email_notification_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#id GooglePrivilegedAccessManagerSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serviceAccountApproverSettings`<sup>Optional</sup> <a name="serviceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.serviceAccountApproverSettings"></a>

```typescript
public readonly serviceAccountApproverSettings: GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a>

service_account_approver_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#service_account_approver_settings GooglePrivilegedAccessManagerSettings#service_account_approver_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GooglePrivilegedAccessManagerSettingsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#timeouts GooglePrivilegedAccessManagerSettings#timeouts}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettings <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.Initializer"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

const googlePrivilegedAccessManagerSettingsEmailNotificationSettings: googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.property.customNotificationBehavior">customNotificationBehavior</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a></code> | custom_notification_behavior block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.property.disableAllNotifications">disableAllNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a></code> | disable_all_notifications block. |

---

##### `customNotificationBehavior`<sup>Optional</sup> <a name="customNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.property.customNotificationBehavior"></a>

```typescript
public readonly customNotificationBehavior: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a>

custom_notification_behavior block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#custom_notification_behavior GooglePrivilegedAccessManagerSettings#custom_notification_behavior}

---

##### `disableAllNotifications`<sup>Optional</sup> <a name="disableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings.property.disableAllNotifications"></a>

```typescript
public readonly disableAllNotifications: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a>

disable_all_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#disable_all_notifications GooglePrivilegedAccessManagerSettings#disable_all_notifications}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.Initializer"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

const googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior: googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.adminNotifications">adminNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a></code> | admin_notifications block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.approverNotifications">approverNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a></code> | approver_notifications block. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.requesterNotifications">requesterNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a></code> | requester_notifications block. |

---

##### `adminNotifications`<sup>Optional</sup> <a name="adminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.adminNotifications"></a>

```typescript
public readonly adminNotifications: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a>

admin_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#admin_notifications GooglePrivilegedAccessManagerSettings#admin_notifications}

---

##### `approverNotifications`<sup>Optional</sup> <a name="approverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.approverNotifications"></a>

```typescript
public readonly approverNotifications: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a>

approver_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#approver_notifications GooglePrivilegedAccessManagerSettings#approver_notifications}

---

##### `requesterNotifications`<sup>Optional</sup> <a name="requesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior.property.requesterNotifications"></a>

```typescript
public readonly requesterNotifications: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a>

requester_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#requester_notifications GooglePrivilegedAccessManagerSettings#requester_notifications}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.Initializer"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

const googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications: googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantActivated">grantActivated</a></code> | <code>string</code> | Notification mode for grant activated. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantActivationFailed">grantActivationFailed</a></code> | <code>string</code> | Notification mode for grant activation failed. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantEnded">grantEnded</a></code> | <code>string</code> | Notification mode for grant ended. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantExternallyModified">grantExternallyModified</a></code> | <code>string</code> | Notification mode for grant externally modified. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |

---

##### `grantActivated`<sup>Optional</sup> <a name="grantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantActivated"></a>

```typescript
public readonly grantActivated: string;
```

- *Type:* string

Notification mode for grant activated. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_activated GooglePrivilegedAccessManagerSettings#grant_activated}

---

##### `grantActivationFailed`<sup>Optional</sup> <a name="grantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantActivationFailed"></a>

```typescript
public readonly grantActivationFailed: string;
```

- *Type:* string

Notification mode for grant activation failed. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_activation_failed GooglePrivilegedAccessManagerSettings#grant_activation_failed}

---

##### `grantEnded`<sup>Optional</sup> <a name="grantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantEnded"></a>

```typescript
public readonly grantEnded: string;
```

- *Type:* string

Notification mode for grant ended. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_ended GooglePrivilegedAccessManagerSettings#grant_ended}

---

##### `grantExternallyModified`<sup>Optional</sup> <a name="grantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications.property.grantExternallyModified"></a>

```typescript
public readonly grantExternallyModified: string;
```

- *Type:* string

Notification mode for grant externally modified. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_externally_modified GooglePrivilegedAccessManagerSettings#grant_externally_modified}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications.Initializer"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

const googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications: googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications.property.pendingApproval">pendingApproval</a></code> | <code>string</code> | Notification mode for pending approval. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |

---

##### `pendingApproval`<sup>Optional</sup> <a name="pendingApproval" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications.property.pendingApproval"></a>

```typescript
public readonly pendingApproval: string;
```

- *Type:* string

Notification mode for pending approval. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#pending_approval GooglePrivilegedAccessManagerSettings#pending_approval}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.Initializer"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

const googlePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications: googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.entitlementAssigned">entitlementAssigned</a></code> | <code>string</code> | Notification mode for entitlement assigned. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantActivated">grantActivated</a></code> | <code>string</code> | Notification mode for grant activated. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantActivationFailed">grantActivationFailed</a></code> | <code>string</code> | Notification mode for grant activation failed. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantDenied">grantDenied</a></code> | <code>string</code> | Notification mode for grant denied. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantEnded">grantEnded</a></code> | <code>string</code> | Notification mode for grant ended. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantExpired">grantExpired</a></code> | <code>string</code> | Notification mode for grant expired. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantExternallyModified">grantExternallyModified</a></code> | <code>string</code> | Notification mode for grant externally modified. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantRevoked">grantRevoked</a></code> | <code>string</code> | Notification mode for grant revoked. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"]. |

---

##### `entitlementAssigned`<sup>Optional</sup> <a name="entitlementAssigned" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.entitlementAssigned"></a>

```typescript
public readonly entitlementAssigned: string;
```

- *Type:* string

Notification mode for entitlement assigned. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#entitlement_assigned GooglePrivilegedAccessManagerSettings#entitlement_assigned}

---

##### `grantActivated`<sup>Optional</sup> <a name="grantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantActivated"></a>

```typescript
public readonly grantActivated: string;
```

- *Type:* string

Notification mode for grant activated. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_activated GooglePrivilegedAccessManagerSettings#grant_activated}

---

##### `grantActivationFailed`<sup>Optional</sup> <a name="grantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantActivationFailed"></a>

```typescript
public readonly grantActivationFailed: string;
```

- *Type:* string

Notification mode for grant activation failed. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_activation_failed GooglePrivilegedAccessManagerSettings#grant_activation_failed}

---

##### `grantDenied`<sup>Optional</sup> <a name="grantDenied" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantDenied"></a>

```typescript
public readonly grantDenied: string;
```

- *Type:* string

Notification mode for grant denied. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_denied GooglePrivilegedAccessManagerSettings#grant_denied}

---

##### `grantEnded`<sup>Optional</sup> <a name="grantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantEnded"></a>

```typescript
public readonly grantEnded: string;
```

- *Type:* string

Notification mode for grant ended. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_ended GooglePrivilegedAccessManagerSettings#grant_ended}

---

##### `grantExpired`<sup>Optional</sup> <a name="grantExpired" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantExpired"></a>

```typescript
public readonly grantExpired: string;
```

- *Type:* string

Notification mode for grant expired. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_expired GooglePrivilegedAccessManagerSettings#grant_expired}

---

##### `grantExternallyModified`<sup>Optional</sup> <a name="grantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantExternallyModified"></a>

```typescript
public readonly grantExternallyModified: string;
```

- *Type:* string

Notification mode for grant externally modified. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_externally_modified GooglePrivilegedAccessManagerSettings#grant_externally_modified}

---

##### `grantRevoked`<sup>Optional</sup> <a name="grantRevoked" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications.property.grantRevoked"></a>

```typescript
public readonly grantRevoked: string;
```

- *Type:* string

Notification mode for grant revoked. Possible values: ["NOTIFICATION_MODE_UNSPECIFIED", "ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#grant_revoked GooglePrivilegedAccessManagerSettings#grant_revoked}

---

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications.Initializer"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

const googlePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications: googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications = { ... }
```


### GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings <a name="GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings.Initializer"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

const googlePrivilegedAccessManagerSettingsServiceAccountApproverSettings: googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether service account is allowed to grant approvals. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether service account is allowed to grant approvals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#enabled GooglePrivilegedAccessManagerSettings#enabled}

---

### GooglePrivilegedAccessManagerSettingsTimeouts <a name="GooglePrivilegedAccessManagerSettingsTimeouts" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.Initializer"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

const googlePrivilegedAccessManagerSettingsTimeouts: googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#create GooglePrivilegedAccessManagerSettings#create}. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#delete GooglePrivilegedAccessManagerSettings#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#update GooglePrivilegedAccessManagerSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#create GooglePrivilegedAccessManagerSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#delete GooglePrivilegedAccessManagerSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_privileged_access_manager_settings#update GooglePrivilegedAccessManagerSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

new googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantActivated">resetGrantActivated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantActivationFailed">resetGrantActivationFailed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantEnded">resetGrantEnded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantExternallyModified">resetGrantExternallyModified</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGrantActivated` <a name="resetGrantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantActivated"></a>

```typescript
public resetGrantActivated(): void
```

##### `resetGrantActivationFailed` <a name="resetGrantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantActivationFailed"></a>

```typescript
public resetGrantActivationFailed(): void
```

##### `resetGrantEnded` <a name="resetGrantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantEnded"></a>

```typescript
public resetGrantEnded(): void
```

##### `resetGrantExternallyModified` <a name="resetGrantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.resetGrantExternallyModified"></a>

```typescript
public resetGrantExternallyModified(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivatedInput">grantActivatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivationFailedInput">grantActivationFailedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantEndedInput">grantEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantExternallyModifiedInput">grantExternallyModifiedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivated">grantActivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivationFailed">grantActivationFailed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantEnded">grantEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantExternallyModified">grantExternallyModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grantActivatedInput`<sup>Optional</sup> <a name="grantActivatedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivatedInput"></a>

```typescript
public readonly grantActivatedInput: string;
```

- *Type:* string

---

##### `grantActivationFailedInput`<sup>Optional</sup> <a name="grantActivationFailedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivationFailedInput"></a>

```typescript
public readonly grantActivationFailedInput: string;
```

- *Type:* string

---

##### `grantEndedInput`<sup>Optional</sup> <a name="grantEndedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantEndedInput"></a>

```typescript
public readonly grantEndedInput: string;
```

- *Type:* string

---

##### `grantExternallyModifiedInput`<sup>Optional</sup> <a name="grantExternallyModifiedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantExternallyModifiedInput"></a>

```typescript
public readonly grantExternallyModifiedInput: string;
```

- *Type:* string

---

##### `grantActivated`<sup>Required</sup> <a name="grantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivated"></a>

```typescript
public readonly grantActivated: string;
```

- *Type:* string

---

##### `grantActivationFailed`<sup>Required</sup> <a name="grantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantActivationFailed"></a>

```typescript
public readonly grantActivationFailed: string;
```

- *Type:* string

---

##### `grantEnded`<sup>Required</sup> <a name="grantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantEnded"></a>

```typescript
public readonly grantEnded: string;
```

- *Type:* string

---

##### `grantExternallyModified`<sup>Required</sup> <a name="grantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.grantExternallyModified"></a>

```typescript
public readonly grantExternallyModified: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

new googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resetPendingApproval">resetPendingApproval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPendingApproval` <a name="resetPendingApproval" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.resetPendingApproval"></a>

```typescript
public resetPendingApproval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.pendingApprovalInput">pendingApprovalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.pendingApproval">pendingApproval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pendingApprovalInput`<sup>Optional</sup> <a name="pendingApprovalInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.pendingApprovalInput"></a>

```typescript
public readonly pendingApprovalInput: string;
```

- *Type:* string

---

##### `pendingApproval`<sup>Required</sup> <a name="pendingApproval" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.pendingApproval"></a>

```typescript
public readonly pendingApproval: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

new googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putAdminNotifications">putAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putApproverNotifications">putApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putRequesterNotifications">putRequesterNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetAdminNotifications">resetAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetApproverNotifications">resetApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetRequesterNotifications">resetRequesterNotifications</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminNotifications` <a name="putAdminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putAdminNotifications"></a>

```typescript
public putAdminNotifications(value: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putAdminNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a>

---

##### `putApproverNotifications` <a name="putApproverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putApproverNotifications"></a>

```typescript
public putApproverNotifications(value: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putApproverNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a>

---

##### `putRequesterNotifications` <a name="putRequesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putRequesterNotifications"></a>

```typescript
public putRequesterNotifications(value: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.putRequesterNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a>

---

##### `resetAdminNotifications` <a name="resetAdminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetAdminNotifications"></a>

```typescript
public resetAdminNotifications(): void
```

##### `resetApproverNotifications` <a name="resetApproverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetApproverNotifications"></a>

```typescript
public resetApproverNotifications(): void
```

##### `resetRequesterNotifications` <a name="resetRequesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.resetRequesterNotifications"></a>

```typescript
public resetRequesterNotifications(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.adminNotifications">adminNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.approverNotifications">approverNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.requesterNotifications">requesterNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.adminNotificationsInput">adminNotificationsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.approverNotificationsInput">approverNotificationsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.requesterNotificationsInput">requesterNotificationsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminNotifications`<sup>Required</sup> <a name="adminNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.adminNotifications"></a>

```typescript
public readonly adminNotifications: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotificationsOutputReference</a>

---

##### `approverNotifications`<sup>Required</sup> <a name="approverNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.approverNotifications"></a>

```typescript
public readonly approverNotifications: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotificationsOutputReference</a>

---

##### `requesterNotifications`<sup>Required</sup> <a name="requesterNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.requesterNotifications"></a>

```typescript
public readonly requesterNotifications: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference</a>

---

##### `adminNotificationsInput`<sup>Optional</sup> <a name="adminNotificationsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.adminNotificationsInput"></a>

```typescript
public readonly adminNotificationsInput: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorAdminNotifications</a>

---

##### `approverNotificationsInput`<sup>Optional</sup> <a name="approverNotificationsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.approverNotificationsInput"></a>

```typescript
public readonly approverNotificationsInput: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorApproverNotifications</a>

---

##### `requesterNotificationsInput`<sup>Optional</sup> <a name="requesterNotificationsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.requesterNotificationsInput"></a>

```typescript
public readonly requesterNotificationsInput: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

new googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetEntitlementAssigned">resetEntitlementAssigned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantActivated">resetGrantActivated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantActivationFailed">resetGrantActivationFailed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantDenied">resetGrantDenied</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantEnded">resetGrantEnded</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantExpired">resetGrantExpired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantExternallyModified">resetGrantExternallyModified</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantRevoked">resetGrantRevoked</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntitlementAssigned` <a name="resetEntitlementAssigned" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetEntitlementAssigned"></a>

```typescript
public resetEntitlementAssigned(): void
```

##### `resetGrantActivated` <a name="resetGrantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantActivated"></a>

```typescript
public resetGrantActivated(): void
```

##### `resetGrantActivationFailed` <a name="resetGrantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantActivationFailed"></a>

```typescript
public resetGrantActivationFailed(): void
```

##### `resetGrantDenied` <a name="resetGrantDenied" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantDenied"></a>

```typescript
public resetGrantDenied(): void
```

##### `resetGrantEnded` <a name="resetGrantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantEnded"></a>

```typescript
public resetGrantEnded(): void
```

##### `resetGrantExpired` <a name="resetGrantExpired" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantExpired"></a>

```typescript
public resetGrantExpired(): void
```

##### `resetGrantExternallyModified` <a name="resetGrantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantExternallyModified"></a>

```typescript
public resetGrantExternallyModified(): void
```

##### `resetGrantRevoked` <a name="resetGrantRevoked" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.resetGrantRevoked"></a>

```typescript
public resetGrantRevoked(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.entitlementAssignedInput">entitlementAssignedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivatedInput">grantActivatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivationFailedInput">grantActivationFailedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantDeniedInput">grantDeniedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantEndedInput">grantEndedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExpiredInput">grantExpiredInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExternallyModifiedInput">grantExternallyModifiedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantRevokedInput">grantRevokedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.entitlementAssigned">entitlementAssigned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivated">grantActivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivationFailed">grantActivationFailed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantDenied">grantDenied</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantEnded">grantEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExpired">grantExpired</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExternallyModified">grantExternallyModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantRevoked">grantRevoked</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entitlementAssignedInput`<sup>Optional</sup> <a name="entitlementAssignedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.entitlementAssignedInput"></a>

```typescript
public readonly entitlementAssignedInput: string;
```

- *Type:* string

---

##### `grantActivatedInput`<sup>Optional</sup> <a name="grantActivatedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivatedInput"></a>

```typescript
public readonly grantActivatedInput: string;
```

- *Type:* string

---

##### `grantActivationFailedInput`<sup>Optional</sup> <a name="grantActivationFailedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivationFailedInput"></a>

```typescript
public readonly grantActivationFailedInput: string;
```

- *Type:* string

---

##### `grantDeniedInput`<sup>Optional</sup> <a name="grantDeniedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantDeniedInput"></a>

```typescript
public readonly grantDeniedInput: string;
```

- *Type:* string

---

##### `grantEndedInput`<sup>Optional</sup> <a name="grantEndedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantEndedInput"></a>

```typescript
public readonly grantEndedInput: string;
```

- *Type:* string

---

##### `grantExpiredInput`<sup>Optional</sup> <a name="grantExpiredInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExpiredInput"></a>

```typescript
public readonly grantExpiredInput: string;
```

- *Type:* string

---

##### `grantExternallyModifiedInput`<sup>Optional</sup> <a name="grantExternallyModifiedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExternallyModifiedInput"></a>

```typescript
public readonly grantExternallyModifiedInput: string;
```

- *Type:* string

---

##### `grantRevokedInput`<sup>Optional</sup> <a name="grantRevokedInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantRevokedInput"></a>

```typescript
public readonly grantRevokedInput: string;
```

- *Type:* string

---

##### `entitlementAssigned`<sup>Required</sup> <a name="entitlementAssigned" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.entitlementAssigned"></a>

```typescript
public readonly entitlementAssigned: string;
```

- *Type:* string

---

##### `grantActivated`<sup>Required</sup> <a name="grantActivated" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivated"></a>

```typescript
public readonly grantActivated: string;
```

- *Type:* string

---

##### `grantActivationFailed`<sup>Required</sup> <a name="grantActivationFailed" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantActivationFailed"></a>

```typescript
public readonly grantActivationFailed: string;
```

- *Type:* string

---

##### `grantDenied`<sup>Required</sup> <a name="grantDenied" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantDenied"></a>

```typescript
public readonly grantDenied: string;
```

- *Type:* string

---

##### `grantEnded`<sup>Required</sup> <a name="grantEnded" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantEnded"></a>

```typescript
public readonly grantEnded: string;
```

- *Type:* string

---

##### `grantExpired`<sup>Required</sup> <a name="grantExpired" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExpired"></a>

```typescript
public readonly grantExpired: string;
```

- *Type:* string

---

##### `grantExternallyModified`<sup>Required</sup> <a name="grantExternallyModified" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantExternallyModified"></a>

```typescript
public readonly grantExternallyModified: string;
```

- *Type:* string

---

##### `grantRevoked`<sup>Required</sup> <a name="grantRevoked" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.grantRevoked"></a>

```typescript
public readonly grantRevoked: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorRequesterNotifications</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

new googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a>

---


### GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference <a name="GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

new googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putCustomNotificationBehavior">putCustomNotificationBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putDisableAllNotifications">putDisableAllNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resetCustomNotificationBehavior">resetCustomNotificationBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resetDisableAllNotifications">resetDisableAllNotifications</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomNotificationBehavior` <a name="putCustomNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putCustomNotificationBehavior"></a>

```typescript
public putCustomNotificationBehavior(value: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putCustomNotificationBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a>

---

##### `putDisableAllNotifications` <a name="putDisableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putDisableAllNotifications"></a>

```typescript
public putDisableAllNotifications(value: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.putDisableAllNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a>

---

##### `resetCustomNotificationBehavior` <a name="resetCustomNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resetCustomNotificationBehavior"></a>

```typescript
public resetCustomNotificationBehavior(): void
```

##### `resetDisableAllNotifications` <a name="resetDisableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.resetDisableAllNotifications"></a>

```typescript
public resetDisableAllNotifications(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.customNotificationBehavior">customNotificationBehavior</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.disableAllNotifications">disableAllNotifications</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.customNotificationBehaviorInput">customNotificationBehaviorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.disableAllNotificationsInput">disableAllNotificationsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customNotificationBehavior`<sup>Required</sup> <a name="customNotificationBehavior" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.customNotificationBehavior"></a>

```typescript
public readonly customNotificationBehavior: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehaviorOutputReference</a>

---

##### `disableAllNotifications`<sup>Required</sup> <a name="disableAllNotifications" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.disableAllNotifications"></a>

```typescript
public readonly disableAllNotifications: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotificationsOutputReference</a>

---

##### `customNotificationBehaviorInput`<sup>Optional</sup> <a name="customNotificationBehaviorInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.customNotificationBehaviorInput"></a>

```typescript
public readonly customNotificationBehaviorInput: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsCustomNotificationBehavior</a>

---

##### `disableAllNotificationsInput`<sup>Optional</sup> <a name="disableAllNotificationsInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.disableAllNotificationsInput"></a>

```typescript
public readonly disableAllNotificationsInput: GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications">GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsDisableAllNotifications</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePrivilegedAccessManagerSettingsEmailNotificationSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsEmailNotificationSettings">GooglePrivilegedAccessManagerSettingsEmailNotificationSettings</a>

---


### GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference <a name="GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

new googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings">GooglePrivilegedAccessManagerSettingsServiceAccountApproverSettings</a>

---


### GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference <a name="GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { googlePrivilegedAccessManagerSettings } from '@cdktn/provider-google-beta'

new googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GooglePrivilegedAccessManagerSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googlePrivilegedAccessManagerSettings.GooglePrivilegedAccessManagerSettingsTimeouts">GooglePrivilegedAccessManagerSettingsTimeouts</a>

---



