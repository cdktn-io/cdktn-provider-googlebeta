# `googleFirebaseAppCheckServiceConfig` Submodule <a name="`googleFirebaseAppCheckServiceConfig` Submodule" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppCheckServiceConfig <a name="GoogleFirebaseAppCheckServiceConfig" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_app_check_service_config google_firebase_app_check_service_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer"></a>

```typescript
import { googleFirebaseAppCheckServiceConfig } from '@cdktn/provider-google-beta'

new googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig(scope: Construct, id: string, config: GoogleFirebaseAppCheckServiceConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig">GoogleFirebaseAppCheckServiceConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig">GoogleFirebaseAppCheckServiceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetEnforcementMode">resetEnforcementMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleFirebaseAppCheckServiceConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts">GoogleFirebaseAppCheckServiceConfigTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetEnforcementMode` <a name="resetEnforcementMode" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetEnforcementMode"></a>

```typescript
public resetEnforcementMode(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseAppCheckServiceConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isConstruct"></a>

```typescript
import { googleFirebaseAppCheckServiceConfig } from '@cdktn/provider-google-beta'

googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isTerraformElement"></a>

```typescript
import { googleFirebaseAppCheckServiceConfig } from '@cdktn/provider-google-beta'

googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isTerraformResource"></a>

```typescript
import { googleFirebaseAppCheckServiceConfig } from '@cdktn/provider-google-beta'

googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.generateConfigForImport"></a>

```typescript
import { googleFirebaseAppCheckServiceConfig } from '@cdktn/provider-google-beta'

googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleFirebaseAppCheckServiceConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseAppCheckServiceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseAppCheckServiceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_app_check_service_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppCheckServiceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference">GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.enforcementModeInput">enforcementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts">GoogleFirebaseAppCheckServiceConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.enforcementMode">enforcementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference">GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `enforcementModeInput`<sup>Optional</sup> <a name="enforcementModeInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.enforcementModeInput"></a>

```typescript
public readonly enforcementModeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleFirebaseAppCheckServiceConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts">GoogleFirebaseAppCheckServiceConfigTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.enforcementMode"></a>

```typescript
public readonly enforcementMode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppCheckServiceConfigConfig <a name="GoogleFirebaseAppCheckServiceConfigConfig" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.Initializer"></a>

```typescript
import { googleFirebaseAppCheckServiceConfig } from '@cdktn/provider-google-beta'

const googleFirebaseAppCheckServiceConfigConfig: googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.serviceId">serviceId</a></code> | <code>string</code> | The identifier of the service to configure enforcement. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.enforcementMode">enforcementMode</a></code> | <code>string</code> | The App Check enforcement mode for a service supported by App Check. Valid values are. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_app_check_service_config#id GoogleFirebaseAppCheckServiceConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_app_check_service_config#project GoogleFirebaseAppCheckServiceConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts">GoogleFirebaseAppCheckServiceConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The identifier of the service to configure enforcement.

Currently, the following service IDs are supported:
  firebasestorage.googleapis.com (Cloud Storage for Firebase)
  firebasedatabase.googleapis.com (Firebase Realtime Database)
  firestore.googleapis.com (Cloud Firestore)
  identitytoolkit.googleapis.com (Authentication)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_app_check_service_config#service_id GoogleFirebaseAppCheckServiceConfig#service_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_app_check_service_config#deletion_policy GoogleFirebaseAppCheckServiceConfig#deletion_policy}

---

##### `enforcementMode`<sup>Optional</sup> <a name="enforcementMode" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.enforcementMode"></a>

```typescript
public readonly enforcementMode: string;
```

- *Type:* string

The App Check enforcement mode for a service supported by App Check. Valid values are.

(Unset)
Firebase App Check is not enforced for the service, nor are App Check metrics collected.
Though the service is not protected by App Check in this mode, other applicable protections,
such as user authorization, are still enforced. An unconfigured service is in this mode by default.
This is equivalent to OFF in the REST API. Deleting the Terraform resource will also switch the
enforcement to OFF for this service.

UNENFORCED
Firebase App Check is not enforced for the service. App Check metrics are collected to help you
decide when to turn on enforcement for the service. Though the service is not protected by App Check
in this mode, other applicable protections, such as user authorization, are still enforced.

ENFORCED
Firebase App Check is enforced for the service. The service will reject any request that attempts to
access your project's resources if it does not have valid App Check token attached, with some exceptions
depending on the service; for example, some services will still allow requests bearing the developer's
privileged service account credentials without an App Check token. App Check metrics continue to be
collected to help you detect issues with your App Check integration and monitor the composition of your
callers. While the service is protected by App Check, other applicable protections, such as user
authorization, continue to be enforced at the same time.

Use caution when choosing to enforce App Check on a Firebase service. If your users have not updated
to an App Check capable version of your app, their apps will no longer be able to use your Firebase
services that are enforcing App Check. App Check metrics can help you decide whether to enforce App
Check on your Firebase services.

If your app has not launched yet, you should enable enforcement immediately, since there are no outdated
clients in use. Possible values: ["UNENFORCED", "ENFORCED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_app_check_service_config#enforcement_mode GoogleFirebaseAppCheckServiceConfig#enforcement_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_app_check_service_config#id GoogleFirebaseAppCheckServiceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_app_check_service_config#project GoogleFirebaseAppCheckServiceConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseAppCheckServiceConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts">GoogleFirebaseAppCheckServiceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_app_check_service_config#timeouts GoogleFirebaseAppCheckServiceConfig#timeouts}

---

### GoogleFirebaseAppCheckServiceConfigTimeouts <a name="GoogleFirebaseAppCheckServiceConfigTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts.Initializer"></a>

```typescript
import { googleFirebaseAppCheckServiceConfig } from '@cdktn/provider-google-beta'

const googleFirebaseAppCheckServiceConfigTimeouts: googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_app_check_service_config#create GoogleFirebaseAppCheckServiceConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_app_check_service_config#delete GoogleFirebaseAppCheckServiceConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_app_check_service_config#update GoogleFirebaseAppCheckServiceConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_app_check_service_config#create GoogleFirebaseAppCheckServiceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_app_check_service_config#delete GoogleFirebaseAppCheckServiceConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_firebase_app_check_service_config#update GoogleFirebaseAppCheckServiceConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference <a name="GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAppCheckServiceConfig } from '@cdktn/provider-google-beta'

new googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts">GoogleFirebaseAppCheckServiceConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseAppCheckServiceConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts">GoogleFirebaseAppCheckServiceConfigTimeouts</a>

---



