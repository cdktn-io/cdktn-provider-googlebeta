# `googleArtifactRegistryProjectConfig` Submodule <a name="`googleArtifactRegistryProjectConfig` Submodule" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleArtifactRegistryProjectConfig <a name="GoogleArtifactRegistryProjectConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_artifact_registry_project_config google_artifact_registry_project_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer"></a>

```typescript
import { googleArtifactRegistryProjectConfig } from '@cdktn/provider-google-beta'

new googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig(scope: Construct, id: string, config?: GoogleArtifactRegistryProjectConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig">GoogleArtifactRegistryProjectConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig">GoogleArtifactRegistryProjectConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putPlatformLogsConfig">putPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetPlatformLogsConfig">resetPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPlatformLogsConfig` <a name="putPlatformLogsConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putPlatformLogsConfig"></a>

```typescript
public putPlatformLogsConfig(value: GoogleArtifactRegistryProjectConfigPlatformLogsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putPlatformLogsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleArtifactRegistryProjectConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetPlatformLogsConfig` <a name="resetPlatformLogsConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetPlatformLogsConfig"></a>

```typescript
public resetPlatformLogsConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleArtifactRegistryProjectConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isConstruct"></a>

```typescript
import { googleArtifactRegistryProjectConfig } from '@cdktn/provider-google-beta'

googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformElement"></a>

```typescript
import { googleArtifactRegistryProjectConfig } from '@cdktn/provider-google-beta'

googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformResource"></a>

```typescript
import { googleArtifactRegistryProjectConfig } from '@cdktn/provider-google-beta'

googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport"></a>

```typescript
import { googleArtifactRegistryProjectConfig } from '@cdktn/provider-google-beta'

googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleArtifactRegistryProjectConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleArtifactRegistryProjectConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleArtifactRegistryProjectConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_artifact_registry_project_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleArtifactRegistryProjectConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.platformLogsConfig">platformLogsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference">GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference">GoogleArtifactRegistryProjectConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.platformLogsConfigInput">platformLogsConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platformLogsConfig`<sup>Required</sup> <a name="platformLogsConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.platformLogsConfig"></a>

```typescript
public readonly platformLogsConfig: GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference">GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleArtifactRegistryProjectConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference">GoogleArtifactRegistryProjectConfigTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `platformLogsConfigInput`<sup>Optional</sup> <a name="platformLogsConfigInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.platformLogsConfigInput"></a>

```typescript
public readonly platformLogsConfigInput: GoogleArtifactRegistryProjectConfigPlatformLogsConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleArtifactRegistryProjectConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleArtifactRegistryProjectConfigConfig <a name="GoogleArtifactRegistryProjectConfigConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.Initializer"></a>

```typescript
import { googleArtifactRegistryProjectConfig } from '@cdktn/provider-google-beta'

const googleArtifactRegistryProjectConfigConfig: googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_artifact_registry_project_config#id GoogleArtifactRegistryProjectConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.location">location</a></code> | <code>string</code> | The name of the location this config is located in. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.platformLogsConfig">platformLogsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | platform_logs_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_artifact_registry_project_config#project GoogleArtifactRegistryProjectConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_artifact_registry_project_config#id GoogleArtifactRegistryProjectConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location this config is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_artifact_registry_project_config#location GoogleArtifactRegistryProjectConfig#location}

---

##### `platformLogsConfig`<sup>Optional</sup> <a name="platformLogsConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.platformLogsConfig"></a>

```typescript
public readonly platformLogsConfig: GoogleArtifactRegistryProjectConfigPlatformLogsConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a>

platform_logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_artifact_registry_project_config#platform_logs_config GoogleArtifactRegistryProjectConfig#platform_logs_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_artifact_registry_project_config#project GoogleArtifactRegistryProjectConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleArtifactRegistryProjectConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_artifact_registry_project_config#timeouts GoogleArtifactRegistryProjectConfig#timeouts}

---

### GoogleArtifactRegistryProjectConfigPlatformLogsConfig <a name="GoogleArtifactRegistryProjectConfigPlatformLogsConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.Initializer"></a>

```typescript
import { googleArtifactRegistryProjectConfig } from '@cdktn/provider-google-beta'

const googleArtifactRegistryProjectConfigPlatformLogsConfig: googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.property.loggingState">loggingState</a></code> | <code>string</code> | The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.property.severityLevel">severityLevel</a></code> | <code>string</code> | The severity level for the logs. |

---

##### `loggingState`<sup>Optional</sup> <a name="loggingState" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.property.loggingState"></a>

```typescript
public readonly loggingState: string;
```

- *Type:* string

The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_artifact_registry_project_config#logging_state GoogleArtifactRegistryProjectConfig#logging_state}

---

##### `severityLevel`<sup>Optional</sup> <a name="severityLevel" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.property.severityLevel"></a>

```typescript
public readonly severityLevel: string;
```

- *Type:* string

The severity level for the logs.

Logs will be generated if their
severity level is >= than the value of the severity level mentioned here. Possible values: ["DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_artifact_registry_project_config#severity_level GoogleArtifactRegistryProjectConfig#severity_level}

---

### GoogleArtifactRegistryProjectConfigTimeouts <a name="GoogleArtifactRegistryProjectConfigTimeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.Initializer"></a>

```typescript
import { googleArtifactRegistryProjectConfig } from '@cdktn/provider-google-beta'

const googleArtifactRegistryProjectConfigTimeouts: googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_artifact_registry_project_config#create GoogleArtifactRegistryProjectConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_artifact_registry_project_config#delete GoogleArtifactRegistryProjectConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_artifact_registry_project_config#update GoogleArtifactRegistryProjectConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_artifact_registry_project_config#create GoogleArtifactRegistryProjectConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_artifact_registry_project_config#delete GoogleArtifactRegistryProjectConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_artifact_registry_project_config#update GoogleArtifactRegistryProjectConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference <a name="GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer"></a>

```typescript
import { googleArtifactRegistryProjectConfig } from '@cdktn/provider-google-beta'

new googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetLoggingState">resetLoggingState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetSeverityLevel">resetSeverityLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLoggingState` <a name="resetLoggingState" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetLoggingState"></a>

```typescript
public resetLoggingState(): void
```

##### `resetSeverityLevel` <a name="resetSeverityLevel" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetSeverityLevel"></a>

```typescript
public resetSeverityLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingStateInput">loggingStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevelInput">severityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingState">loggingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevel">severityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loggingStateInput`<sup>Optional</sup> <a name="loggingStateInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingStateInput"></a>

```typescript
public readonly loggingStateInput: string;
```

- *Type:* string

---

##### `severityLevelInput`<sup>Optional</sup> <a name="severityLevelInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevelInput"></a>

```typescript
public readonly severityLevelInput: string;
```

- *Type:* string

---

##### `loggingState`<sup>Required</sup> <a name="loggingState" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingState"></a>

```typescript
public readonly loggingState: string;
```

- *Type:* string

---

##### `severityLevel`<sup>Required</sup> <a name="severityLevel" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevel"></a>

```typescript
public readonly severityLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleArtifactRegistryProjectConfigPlatformLogsConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a>

---


### GoogleArtifactRegistryProjectConfigTimeoutsOutputReference <a name="GoogleArtifactRegistryProjectConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleArtifactRegistryProjectConfig } from '@cdktn/provider-google-beta'

new googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleArtifactRegistryProjectConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a>

---



