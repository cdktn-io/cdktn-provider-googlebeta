# `googleSccNotificationServiceAccount` Submodule <a name="`googleSccNotificationServiceAccount` Submodule" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccNotificationServiceAccount <a name="GoogleSccNotificationServiceAccount" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_scc_notification_service_account google_scc_notification_service_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.Initializer"></a>

```typescript
import { googleSccNotificationServiceAccount } from '@cdktn/provider-google-beta'

new googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount(scope: Construct, id: string, config?: GoogleSccNotificationServiceAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig">GoogleSccNotificationServiceAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig">GoogleSccNotificationServiceAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSccNotificationServiceAccountTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeouts">GoogleSccNotificationServiceAccountTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSccNotificationServiceAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.isConstruct"></a>

```typescript
import { googleSccNotificationServiceAccount } from '@cdktn/provider-google-beta'

googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.isTerraformElement"></a>

```typescript
import { googleSccNotificationServiceAccount } from '@cdktn/provider-google-beta'

googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.isTerraformResource"></a>

```typescript
import { googleSccNotificationServiceAccount } from '@cdktn/provider-google-beta'

googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.generateConfigForImport"></a>

```typescript
import { googleSccNotificationServiceAccount } from '@cdktn/provider-google-beta'

googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleSccNotificationServiceAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSccNotificationServiceAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSccNotificationServiceAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_scc_notification_service_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSccNotificationServiceAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference">GoogleSccNotificationServiceAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeouts">GoogleSccNotificationServiceAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSccNotificationServiceAccountTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference">GoogleSccNotificationServiceAccountTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSccNotificationServiceAccountTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeouts">GoogleSccNotificationServiceAccountTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccNotificationServiceAccountConfig <a name="GoogleSccNotificationServiceAccountConfig" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.Initializer"></a>

```typescript
import { googleSccNotificationServiceAccount } from '@cdktn/provider-google-beta'

const googleSccNotificationServiceAccountConfig: googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_scc_notification_service_account#id GoogleSccNotificationServiceAccount#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.organization">organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_scc_notification_service_account#organization GoogleSccNotificationServiceAccount#organization}. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_scc_notification_service_account#project GoogleSccNotificationServiceAccount#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeouts">GoogleSccNotificationServiceAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_scc_notification_service_account#id GoogleSccNotificationServiceAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_scc_notification_service_account#organization GoogleSccNotificationServiceAccount#organization}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_scc_notification_service_account#project GoogleSccNotificationServiceAccount#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSccNotificationServiceAccountTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeouts">GoogleSccNotificationServiceAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_scc_notification_service_account#timeouts GoogleSccNotificationServiceAccount#timeouts}

---

### GoogleSccNotificationServiceAccountTimeouts <a name="GoogleSccNotificationServiceAccountTimeouts" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeouts.Initializer"></a>

```typescript
import { googleSccNotificationServiceAccount } from '@cdktn/provider-google-beta'

const googleSccNotificationServiceAccountTimeouts: googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_scc_notification_service_account#create GoogleSccNotificationServiceAccount#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_scc_notification_service_account#delete GoogleSccNotificationServiceAccount#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_scc_notification_service_account#read GoogleSccNotificationServiceAccount#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_scc_notification_service_account#create GoogleSccNotificationServiceAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_scc_notification_service_account#delete GoogleSccNotificationServiceAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_scc_notification_service_account#read GoogleSccNotificationServiceAccount#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccNotificationServiceAccountTimeoutsOutputReference <a name="GoogleSccNotificationServiceAccountTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSccNotificationServiceAccount } from '@cdktn/provider-google-beta'

new googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeouts">GoogleSccNotificationServiceAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSccNotificationServiceAccountTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSccNotificationServiceAccount.GoogleSccNotificationServiceAccountTimeouts">GoogleSccNotificationServiceAccountTimeouts</a>

---



