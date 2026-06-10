# `googleChronicleEnvironment` Submodule <a name="`googleChronicleEnvironment` Submodule" id="@cdktn/provider-google-beta.googleChronicleEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleEnvironment <a name="GoogleChronicleEnvironment" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment google_chronicle_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.Initializer"></a>

```typescript
import { googleChronicleEnvironment } from '@cdktn/provider-google-beta'

new googleChronicleEnvironment.GoogleChronicleEnvironment(scope: Construct, id: string, config: GoogleChronicleEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig">GoogleChronicleEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig">GoogleChronicleEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.resetAliasesJson">resetAliasesJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.resetDataAccessScopesJson">resetDataAccessScopesJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleChronicleEnvironmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeouts">GoogleChronicleEnvironmentTimeouts</a>

---

##### `resetAliasesJson` <a name="resetAliasesJson" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.resetAliasesJson"></a>

```typescript
public resetAliasesJson(): void
```

##### `resetDataAccessScopesJson` <a name="resetDataAccessScopesJson" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.resetDataAccessScopesJson"></a>

```typescript
public resetDataAccessScopesJson(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.isConstruct"></a>

```typescript
import { googleChronicleEnvironment } from '@cdktn/provider-google-beta'

googleChronicleEnvironment.GoogleChronicleEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.isTerraformElement"></a>

```typescript
import { googleChronicleEnvironment } from '@cdktn/provider-google-beta'

googleChronicleEnvironment.GoogleChronicleEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.isTerraformResource"></a>

```typescript
import { googleChronicleEnvironment } from '@cdktn/provider-google-beta'

googleChronicleEnvironment.GoogleChronicleEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.generateConfigForImport"></a>

```typescript
import { googleChronicleEnvironment } from '@cdktn/provider-google-beta'

googleChronicleEnvironment.GoogleChronicleEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleChronicleEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference">GoogleChronicleEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.aliasesJsonInput">aliasesJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.contactEmailsInput">contactEmailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.contactInput">contactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.contactPhoneInput">contactPhoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.dataAccessScopesJsonInput">dataAccessScopesJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.retentionDurationInput">retentionDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeouts">GoogleChronicleEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.aliasesJson">aliasesJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.contact">contact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.contactEmails">contactEmails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.contactPhone">contactPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.dataAccessScopesJson">dataAccessScopesJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.retentionDuration">retentionDuration</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleEnvironmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference">GoogleChronicleEnvironmentTimeoutsOutputReference</a>

---

##### `aliasesJsonInput`<sup>Optional</sup> <a name="aliasesJsonInput" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.aliasesJsonInput"></a>

```typescript
public readonly aliasesJsonInput: string;
```

- *Type:* string

---

##### `contactEmailsInput`<sup>Optional</sup> <a name="contactEmailsInput" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.contactEmailsInput"></a>

```typescript
public readonly contactEmailsInput: string;
```

- *Type:* string

---

##### `contactInput`<sup>Optional</sup> <a name="contactInput" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.contactInput"></a>

```typescript
public readonly contactInput: string;
```

- *Type:* string

---

##### `contactPhoneInput`<sup>Optional</sup> <a name="contactPhoneInput" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.contactPhoneInput"></a>

```typescript
public readonly contactPhoneInput: string;
```

- *Type:* string

---

##### `dataAccessScopesJsonInput`<sup>Optional</sup> <a name="dataAccessScopesJsonInput" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.dataAccessScopesJsonInput"></a>

```typescript
public readonly dataAccessScopesJsonInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `retentionDurationInput`<sup>Optional</sup> <a name="retentionDurationInput" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.retentionDurationInput"></a>

```typescript
public readonly retentionDurationInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleChronicleEnvironmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeouts">GoogleChronicleEnvironmentTimeouts</a>

---

##### `aliasesJson`<sup>Required</sup> <a name="aliasesJson" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.aliasesJson"></a>

```typescript
public readonly aliasesJson: string;
```

- *Type:* string

---

##### `contact`<sup>Required</sup> <a name="contact" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.contact"></a>

```typescript
public readonly contact: string;
```

- *Type:* string

---

##### `contactEmails`<sup>Required</sup> <a name="contactEmails" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.contactEmails"></a>

```typescript
public readonly contactEmails: string;
```

- *Type:* string

---

##### `contactPhone`<sup>Required</sup> <a name="contactPhone" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.contactPhone"></a>

```typescript
public readonly contactPhone: string;
```

- *Type:* string

---

##### `dataAccessScopesJson`<sup>Required</sup> <a name="dataAccessScopesJson" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.dataAccessScopesJson"></a>

```typescript
public readonly dataAccessScopesJson: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `retentionDuration`<sup>Required</sup> <a name="retentionDuration" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.retentionDuration"></a>

```typescript
public readonly retentionDuration: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleEnvironmentConfig <a name="GoogleChronicleEnvironmentConfig" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.Initializer"></a>

```typescript
import { googleChronicleEnvironment } from '@cdktn/provider-google-beta'

const googleChronicleEnvironmentConfig: googleChronicleEnvironment.GoogleChronicleEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.contact">contact</a></code> | <code>string</code> | MAX_NAME_LENGTH = 256 Name of the contact for the environment. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.contactEmails">contactEmails</a></code> | <code>string</code> | MAX_NAME_LENGTH = 256 Email of the contact for the environment. Multiple emails can be sepereated with the ';' character. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.contactPhone">contactPhone</a></code> | <code>string</code> | MAX_NAME_LENGTH = 256 Phone number of the contact for the environment. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.description">description</a></code> | <code>string</code> | MAX_NAME_LENGTH = 256 Description of the environment. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.displayName">displayName</a></code> | <code>string</code> | Name of the environment MAX_NAME_LENGTH = 256. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.instance">instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.retentionDuration">retentionDuration</a></code> | <code>number</code> | Environment data retention in months. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.aliasesJson">aliasesJson</a></code> | <code>string</code> | Environment nicknames. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.dataAccessScopesJson">dataAccessScopesJson</a></code> | <code>string</code> | data access scopes. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether Terraform will be prevented from destroying the environment. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#id GoogleChronicleEnvironment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#project GoogleChronicleEnvironment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeouts">GoogleChronicleEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `contact`<sup>Required</sup> <a name="contact" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.contact"></a>

```typescript
public readonly contact: string;
```

- *Type:* string

MAX_NAME_LENGTH = 256 Name of the contact for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#contact GoogleChronicleEnvironment#contact}

---

##### `contactEmails`<sup>Required</sup> <a name="contactEmails" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.contactEmails"></a>

```typescript
public readonly contactEmails: string;
```

- *Type:* string

MAX_NAME_LENGTH = 256 Email of the contact for the environment. Multiple emails can be sepereated with the ';' character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#contact_emails GoogleChronicleEnvironment#contact_emails}

---

##### `contactPhone`<sup>Required</sup> <a name="contactPhone" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.contactPhone"></a>

```typescript
public readonly contactPhone: string;
```

- *Type:* string

MAX_NAME_LENGTH = 256 Phone number of the contact for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#contact_phone GoogleChronicleEnvironment#contact_phone}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

MAX_NAME_LENGTH = 256 Description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#description GoogleChronicleEnvironment#description}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Name of the environment MAX_NAME_LENGTH = 256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#display_name GoogleChronicleEnvironment#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#instance GoogleChronicleEnvironment#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#location GoogleChronicleEnvironment#location}

---

##### `retentionDuration`<sup>Required</sup> <a name="retentionDuration" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.retentionDuration"></a>

```typescript
public readonly retentionDuration: number;
```

- *Type:* number

Environment data retention in months.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#retention_duration GoogleChronicleEnvironment#retention_duration}

---

##### `aliasesJson`<sup>Optional</sup> <a name="aliasesJson" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.aliasesJson"></a>

```typescript
public readonly aliasesJson: string;
```

- *Type:* string

Environment nicknames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#aliases_json GoogleChronicleEnvironment#aliases_json}

---

##### `dataAccessScopesJson`<sup>Optional</sup> <a name="dataAccessScopesJson" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.dataAccessScopesJson"></a>

```typescript
public readonly dataAccessScopesJson: string;
```

- *Type:* string

data access scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#data_access_scopes_json GoogleChronicleEnvironment#data_access_scopes_json}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#deletion_policy GoogleChronicleEnvironment#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether Terraform will be prevented from destroying the environment.

Deleting an environment will remove all its data and all playbooks, environments, integrations instances, reports and agents related to the environment. Once you delete an environment, it cannot be reversed. Deleting environments via terraform destroy or terraform apply will only succeed if this field is false in the Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#deletion_protection GoogleChronicleEnvironment#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#id GoogleChronicleEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#project GoogleChronicleEnvironment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleEnvironmentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeouts">GoogleChronicleEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#timeouts GoogleChronicleEnvironment#timeouts}

---

### GoogleChronicleEnvironmentTimeouts <a name="GoogleChronicleEnvironmentTimeouts" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeouts.Initializer"></a>

```typescript
import { googleChronicleEnvironment } from '@cdktn/provider-google-beta'

const googleChronicleEnvironmentTimeouts: googleChronicleEnvironment.GoogleChronicleEnvironmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#create GoogleChronicleEnvironment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#delete GoogleChronicleEnvironment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#update GoogleChronicleEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#create GoogleChronicleEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#delete GoogleChronicleEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_chronicle_environment#update GoogleChronicleEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleEnvironmentTimeoutsOutputReference <a name="GoogleChronicleEnvironmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleChronicleEnvironment } from '@cdktn/provider-google-beta'

new googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeouts">GoogleChronicleEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleEnvironmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleEnvironment.GoogleChronicleEnvironmentTimeouts">GoogleChronicleEnvironmentTimeouts</a>

---



