# `googleDiscoveryEngineAclConfig` Submodule <a name="`googleDiscoveryEngineAclConfig` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineAclConfig <a name="GoogleDiscoveryEngineAclConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_acl_config google_discovery_engine_acl_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineAclConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig(scope: Construct, id: string, config: GoogleDiscoveryEngineAclConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig">GoogleDiscoveryEngineAclConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig">GoogleDiscoveryEngineAclConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.putIdpConfig">putIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetIdpConfig">resetIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdpConfig` <a name="putIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.putIdpConfig"></a>

```typescript
public putIdpConfig(value: GoogleDiscoveryEngineAclConfigIdpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDiscoveryEngineAclConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdpConfig` <a name="resetIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetIdpConfig"></a>

```typescript
public resetIdpConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineAclConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isConstruct"></a>

```typescript
import { googleDiscoveryEngineAclConfig } from '@cdktn/provider-google-beta'

googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformElement"></a>

```typescript
import { googleDiscoveryEngineAclConfig } from '@cdktn/provider-google-beta'

googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformResource"></a>

```typescript
import { googleDiscoveryEngineAclConfig } from '@cdktn/provider-google-beta'

googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport"></a>

```typescript
import { googleDiscoveryEngineAclConfig } from '@cdktn/provider-google-beta'

googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineAclConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDiscoveryEngineAclConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDiscoveryEngineAclConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_acl_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineAclConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference">GoogleDiscoveryEngineAclConfigIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference">GoogleDiscoveryEngineAclConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.idpConfigInput">idpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `idpConfig`<sup>Required</sup> <a name="idpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.idpConfig"></a>

```typescript
public readonly idpConfig: GoogleDiscoveryEngineAclConfigIdpConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference">GoogleDiscoveryEngineAclConfigIdpConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDiscoveryEngineAclConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference">GoogleDiscoveryEngineAclConfigTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idpConfigInput`<sup>Optional</sup> <a name="idpConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.idpConfigInput"></a>

```typescript
public readonly idpConfigInput: GoogleDiscoveryEngineAclConfigIdpConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDiscoveryEngineAclConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineAclConfigConfig <a name="GoogleDiscoveryEngineAclConfigConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineAclConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineAclConfigConfig: googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_acl_config#id GoogleDiscoveryEngineAclConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.idpConfig">idpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_acl_config#project GoogleDiscoveryEngineAclConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_acl_config#location GoogleDiscoveryEngineAclConfig#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_acl_config#id GoogleDiscoveryEngineAclConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpConfig`<sup>Optional</sup> <a name="idpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.idpConfig"></a>

```typescript
public readonly idpConfig: GoogleDiscoveryEngineAclConfigIdpConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_acl_config#idp_config GoogleDiscoveryEngineAclConfig#idp_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_acl_config#project GoogleDiscoveryEngineAclConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDiscoveryEngineAclConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_acl_config#timeouts GoogleDiscoveryEngineAclConfig#timeouts}

---

### GoogleDiscoveryEngineAclConfigIdpConfig <a name="GoogleDiscoveryEngineAclConfigIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineAclConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineAclConfigIdpConfig: googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig.property.externalIdpConfig">externalIdpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a></code> | external_idp_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig.property.idpType">idpType</a></code> | <code>string</code> | Identity provider type. Possible values: ["GSUITE", "THIRD_PARTY"]. |

---

##### `externalIdpConfig`<sup>Optional</sup> <a name="externalIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig.property.externalIdpConfig"></a>

```typescript
public readonly externalIdpConfig: GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

external_idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_acl_config#external_idp_config GoogleDiscoveryEngineAclConfig#external_idp_config}

---

##### `idpType`<sup>Optional</sup> <a name="idpType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig.property.idpType"></a>

```typescript
public readonly idpType: string;
```

- *Type:* string

Identity provider type. Possible values: ["GSUITE", "THIRD_PARTY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_acl_config#idp_type GoogleDiscoveryEngineAclConfig#idp_type}

---

### GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig <a name="GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineAclConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig: googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig.property.workforcePoolName">workforcePoolName</a></code> | <code>string</code> | Workforce pool name: "locations/global/workforcePools/pool_id". |

---

##### `workforcePoolName`<sup>Optional</sup> <a name="workforcePoolName" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig.property.workforcePoolName"></a>

```typescript
public readonly workforcePoolName: string;
```

- *Type:* string

Workforce pool name: "locations/global/workforcePools/pool_id".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_acl_config#workforce_pool_name GoogleDiscoveryEngineAclConfig#workforce_pool_name}

---

### GoogleDiscoveryEngineAclConfigTimeouts <a name="GoogleDiscoveryEngineAclConfigTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.Initializer"></a>

```typescript
import { googleDiscoveryEngineAclConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineAclConfigTimeouts: googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_acl_config#create GoogleDiscoveryEngineAclConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_acl_config#delete GoogleDiscoveryEngineAclConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_acl_config#update GoogleDiscoveryEngineAclConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_acl_config#create GoogleDiscoveryEngineAclConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_acl_config#delete GoogleDiscoveryEngineAclConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_acl_config#update GoogleDiscoveryEngineAclConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference <a name="GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineAclConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resetWorkforcePoolName">resetWorkforcePoolName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkforcePoolName` <a name="resetWorkforcePoolName" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.resetWorkforcePoolName"></a>

```typescript
public resetWorkforcePoolName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolNameInput">workforcePoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolName">workforcePoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workforcePoolNameInput`<sup>Optional</sup> <a name="workforcePoolNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolNameInput"></a>

```typescript
public readonly workforcePoolNameInput: string;
```

- *Type:* string

---

##### `workforcePoolName`<sup>Required</sup> <a name="workforcePoolName" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.workforcePoolName"></a>

```typescript
public readonly workforcePoolName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

---


### GoogleDiscoveryEngineAclConfigIdpConfigOutputReference <a name="GoogleDiscoveryEngineAclConfigIdpConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineAclConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.putExternalIdpConfig">putExternalIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resetExternalIdpConfig">resetExternalIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resetIdpType">resetIdpType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalIdpConfig` <a name="putExternalIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.putExternalIdpConfig"></a>

```typescript
public putExternalIdpConfig(value: GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.putExternalIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

---

##### `resetExternalIdpConfig` <a name="resetExternalIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resetExternalIdpConfig"></a>

```typescript
public resetExternalIdpConfig(): void
```

##### `resetIdpType` <a name="resetIdpType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.resetIdpType"></a>

```typescript
public resetIdpType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfig">externalIdpConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfigInput">externalIdpConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.idpTypeInput">idpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.idpType">idpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIdpConfig`<sup>Required</sup> <a name="externalIdpConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfig"></a>

```typescript
public readonly externalIdpConfig: GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfigOutputReference</a>

---

##### `externalIdpConfigInput`<sup>Optional</sup> <a name="externalIdpConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.externalIdpConfigInput"></a>

```typescript
public readonly externalIdpConfigInput: GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfigExternalIdpConfig</a>

---

##### `idpTypeInput`<sup>Optional</sup> <a name="idpTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.idpTypeInput"></a>

```typescript
public readonly idpTypeInput: string;
```

- *Type:* string

---

##### `idpType`<sup>Required</sup> <a name="idpType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.idpType"></a>

```typescript
public readonly idpType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineAclConfigIdpConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigIdpConfig">GoogleDiscoveryEngineAclConfigIdpConfig</a>

---


### GoogleDiscoveryEngineAclConfigTimeoutsOutputReference <a name="GoogleDiscoveryEngineAclConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineAclConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineAclConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAclConfig.GoogleDiscoveryEngineAclConfigTimeouts">GoogleDiscoveryEngineAclConfigTimeouts</a>

---



