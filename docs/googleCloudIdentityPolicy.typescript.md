# `googleCloudIdentityPolicy` Submodule <a name="`googleCloudIdentityPolicy` Submodule" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudIdentityPolicy <a name="GoogleCloudIdentityPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy google_cloud_identity_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer"></a>

```typescript
import { googleCloudIdentityPolicy } from '@cdktn/provider-google-beta'

new googleCloudIdentityPolicy.GoogleCloudIdentityPolicy(scope: Construct, id: string, config: GoogleCloudIdentityPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig">GoogleCloudIdentityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig">GoogleCloudIdentityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putPolicyQuery">putPolicyQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putSetting">putSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicyQuery` <a name="putPolicyQuery" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putPolicyQuery"></a>

```typescript
public putPolicyQuery(value: GoogleCloudIdentityPolicyPolicyQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putPolicyQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery">GoogleCloudIdentityPolicyPolicyQuery</a>

---

##### `putSetting` <a name="putSetting" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putSetting"></a>

```typescript
public putSetting(value: GoogleCloudIdentityPolicySetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting">GoogleCloudIdentityPolicySetting</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCloudIdentityPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts">GoogleCloudIdentityPolicyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudIdentityPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isConstruct"></a>

```typescript
import { googleCloudIdentityPolicy } from '@cdktn/provider-google-beta'

googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isTerraformElement"></a>

```typescript
import { googleCloudIdentityPolicy } from '@cdktn/provider-google-beta'

googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isTerraformResource"></a>

```typescript
import { googleCloudIdentityPolicy } from '@cdktn/provider-google-beta'

googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.generateConfigForImport"></a>

```typescript
import { googleCloudIdentityPolicy } from '@cdktn/provider-google-beta'

googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleCloudIdentityPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudIdentityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudIdentityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudIdentityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.policyQuery">policyQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference">GoogleCloudIdentityPolicyPolicyQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.setting">setting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference">GoogleCloudIdentityPolicySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference">GoogleCloudIdentityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.customerInput">customerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.policyQueryInput">policyQueryInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery">GoogleCloudIdentityPolicyPolicyQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.settingInput">settingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting">GoogleCloudIdentityPolicySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts">GoogleCloudIdentityPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.customer">customer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyQuery`<sup>Required</sup> <a name="policyQuery" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.policyQuery"></a>

```typescript
public readonly policyQuery: GoogleCloudIdentityPolicyPolicyQueryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference">GoogleCloudIdentityPolicyPolicyQueryOutputReference</a>

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.setting"></a>

```typescript
public readonly setting: GoogleCloudIdentityPolicySettingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference">GoogleCloudIdentityPolicySettingOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudIdentityPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference">GoogleCloudIdentityPolicyTimeoutsOutputReference</a>

---

##### `customerInput`<sup>Optional</sup> <a name="customerInput" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.customerInput"></a>

```typescript
public readonly customerInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyQueryInput`<sup>Optional</sup> <a name="policyQueryInput" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.policyQueryInput"></a>

```typescript
public readonly policyQueryInput: GoogleCloudIdentityPolicyPolicyQuery;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery">GoogleCloudIdentityPolicyPolicyQuery</a>

---

##### `settingInput`<sup>Optional</sup> <a name="settingInput" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.settingInput"></a>

```typescript
public readonly settingInput: GoogleCloudIdentityPolicySetting;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting">GoogleCloudIdentityPolicySetting</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCloudIdentityPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts">GoogleCloudIdentityPolicyTimeouts</a>

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.customer"></a>

```typescript
public readonly customer: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudIdentityPolicyConfig <a name="GoogleCloudIdentityPolicyConfig" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.Initializer"></a>

```typescript
import { googleCloudIdentityPolicy } from '@cdktn/provider-google-beta'

const googleCloudIdentityPolicyConfig: googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.customer">customer</a></code> | <code>string</code> | The customer that the Policy belongs to. Format: 'customers/{customer_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.policyQuery">policyQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery">GoogleCloudIdentityPolicyPolicyQuery</a></code> | policy_query block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.setting">setting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting">GoogleCloudIdentityPolicySetting</a></code> | setting block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#id GoogleCloudIdentityPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts">GoogleCloudIdentityPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.customer"></a>

```typescript
public readonly customer: string;
```

- *Type:* string

The customer that the Policy belongs to. Format: 'customers/{customer_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#customer GoogleCloudIdentityPolicy#customer}

---

##### `policyQuery`<sup>Required</sup> <a name="policyQuery" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.policyQuery"></a>

```typescript
public readonly policyQuery: GoogleCloudIdentityPolicyPolicyQuery;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery">GoogleCloudIdentityPolicyPolicyQuery</a>

policy_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#policy_query GoogleCloudIdentityPolicy#policy_query}

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.setting"></a>

```typescript
public readonly setting: GoogleCloudIdentityPolicySetting;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting">GoogleCloudIdentityPolicySetting</a>

setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#setting GoogleCloudIdentityPolicy#setting}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#deletion_policy GoogleCloudIdentityPolicy#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#id GoogleCloudIdentityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudIdentityPolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts">GoogleCloudIdentityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#timeouts GoogleCloudIdentityPolicy#timeouts}

---

### GoogleCloudIdentityPolicyPolicyQuery <a name="GoogleCloudIdentityPolicyPolicyQuery" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery.Initializer"></a>

```typescript
import { googleCloudIdentityPolicy } from '@cdktn/provider-google-beta'

const googleCloudIdentityPolicyPolicyQuery: googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery.property.orgUnit">orgUnit</a></code> | <code>string</code> | The OrgUnit the query applies to. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery.property.group">group</a></code> | <code>string</code> | The group that the query applies to. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery.property.query">query</a></code> | <code>string</code> | The CEL query that defines which entities the Policy applies to. |

---

##### `orgUnit`<sup>Required</sup> <a name="orgUnit" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery.property.orgUnit"></a>

```typescript
public readonly orgUnit: string;
```

- *Type:* string

The OrgUnit the query applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#org_unit GoogleCloudIdentityPolicy#org_unit}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

The group that the query applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#group GoogleCloudIdentityPolicy#group}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The CEL query that defines which entities the Policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#query GoogleCloudIdentityPolicy#query}

---

### GoogleCloudIdentityPolicySetting <a name="GoogleCloudIdentityPolicySetting" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting.Initializer"></a>

```typescript
import { googleCloudIdentityPolicy } from '@cdktn/provider-google-beta'

const googleCloudIdentityPolicySetting: googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting.property.type">type</a></code> | <code>string</code> | The type of the Setting. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting.property.valueJson">valueJson</a></code> | <code>string</code> | The value of the Setting as JSON string. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#type GoogleCloudIdentityPolicy#type}

---

##### `valueJson`<sup>Required</sup> <a name="valueJson" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting.property.valueJson"></a>

```typescript
public readonly valueJson: string;
```

- *Type:* string

The value of the Setting as JSON string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#value_json GoogleCloudIdentityPolicy#value_json}

---

### GoogleCloudIdentityPolicyTimeouts <a name="GoogleCloudIdentityPolicyTimeouts" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts.Initializer"></a>

```typescript
import { googleCloudIdentityPolicy } from '@cdktn/provider-google-beta'

const googleCloudIdentityPolicyTimeouts: googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#create GoogleCloudIdentityPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#delete GoogleCloudIdentityPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#update GoogleCloudIdentityPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#create GoogleCloudIdentityPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#delete GoogleCloudIdentityPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_cloud_identity_policy#update GoogleCloudIdentityPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudIdentityPolicyPolicyQueryOutputReference <a name="GoogleCloudIdentityPolicyPolicyQueryOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer"></a>

```typescript
import { googleCloudIdentityPolicy } from '@cdktn/provider-google-beta'

new googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroup` <a name="resetGroup" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.sortOrder">sortOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.orgUnitInput">orgUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.orgUnit">orgUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery">GoogleCloudIdentityPolicyPolicyQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.sortOrder"></a>

```typescript
public readonly sortOrder: number;
```

- *Type:* number

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `orgUnitInput`<sup>Optional</sup> <a name="orgUnitInput" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.orgUnitInput"></a>

```typescript
public readonly orgUnitInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `orgUnit`<sup>Required</sup> <a name="orgUnit" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.orgUnit"></a>

```typescript
public readonly orgUnit: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudIdentityPolicyPolicyQuery;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyPolicyQuery">GoogleCloudIdentityPolicyPolicyQuery</a>

---


### GoogleCloudIdentityPolicySettingOutputReference <a name="GoogleCloudIdentityPolicySettingOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.Initializer"></a>

```typescript
import { googleCloudIdentityPolicy } from '@cdktn/provider-google-beta'

new googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.valueJsonInput">valueJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.valueJson">valueJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting">GoogleCloudIdentityPolicySetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueJsonInput`<sup>Optional</sup> <a name="valueJsonInput" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.valueJsonInput"></a>

```typescript
public readonly valueJsonInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `valueJson`<sup>Required</sup> <a name="valueJson" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.valueJson"></a>

```typescript
public readonly valueJson: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudIdentityPolicySetting;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicySetting">GoogleCloudIdentityPolicySetting</a>

---


### GoogleCloudIdentityPolicyTimeoutsOutputReference <a name="GoogleCloudIdentityPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCloudIdentityPolicy } from '@cdktn/provider-google-beta'

new googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts">GoogleCloudIdentityPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudIdentityPolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCloudIdentityPolicy.GoogleCloudIdentityPolicyTimeouts">GoogleCloudIdentityPolicyTimeouts</a>

---



