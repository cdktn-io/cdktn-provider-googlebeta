# `dataGoogleArtifactRegistryVersions` Submodule <a name="`dataGoogleArtifactRegistryVersions` Submodule" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryVersions <a name="DataGoogleArtifactRegistryVersions" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_artifact_registry_versions google_artifact_registry_versions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryVersions } from '@cdktn/provider-google-beta'

new dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions(scope: Construct, id: string, config: DataGoogleArtifactRegistryVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig">DataGoogleArtifactRegistryVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig">DataGoogleArtifactRegistryVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetView">resetView</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetView` <a name="resetView" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.resetView"></a>

```typescript
public resetView(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleArtifactRegistryVersions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isConstruct"></a>

```typescript
import { dataGoogleArtifactRegistryVersions } from '@cdktn/provider-google-beta'

dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformElement"></a>

```typescript
import { dataGoogleArtifactRegistryVersions } from '@cdktn/provider-google-beta'

dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformDataSource"></a>

```typescript
import { dataGoogleArtifactRegistryVersions } from '@cdktn/provider-google-beta'

dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport"></a>

```typescript
import { dataGoogleArtifactRegistryVersions } from '@cdktn/provider-google-beta'

dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleArtifactRegistryVersions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleArtifactRegistryVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleArtifactRegistryVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_artifact_registry_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.versions">versions</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList">DataGoogleArtifactRegistryVersionsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.packageNameInput">packageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.viewInput">viewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.packageName">packageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.view">view</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.versions"></a>

```typescript
public readonly versions: DataGoogleArtifactRegistryVersionsVersionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList">DataGoogleArtifactRegistryVersionsVersionsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `packageNameInput`<sup>Optional</sup> <a name="packageNameInput" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.packageNameInput"></a>

```typescript
public readonly packageNameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `viewInput`<sup>Optional</sup> <a name="viewInput" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.viewInput"></a>

```typescript
public readonly viewInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.view"></a>

```typescript
public readonly view: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryVersionsConfig <a name="DataGoogleArtifactRegistryVersionsConfig" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryVersions } from '@cdktn/provider-google-beta'

const dataGoogleArtifactRegistryVersionsConfig: dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_artifact_registry_versions#location DataGoogleArtifactRegistryVersions#location}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.packageName">packageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_artifact_registry_versions#package_name DataGoogleArtifactRegistryVersions#package_name}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_artifact_registry_versions#repository_id DataGoogleArtifactRegistryVersions#repository_id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.filter">filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_artifact_registry_versions#filter DataGoogleArtifactRegistryVersions#filter}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_artifact_registry_versions#id DataGoogleArtifactRegistryVersions#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_artifact_registry_versions#project DataGoogleArtifactRegistryVersions#project}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.view">view</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_artifact_registry_versions#view DataGoogleArtifactRegistryVersions#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_artifact_registry_versions#location DataGoogleArtifactRegistryVersions#location}.

---

##### `packageName`<sup>Required</sup> <a name="packageName" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_artifact_registry_versions#package_name DataGoogleArtifactRegistryVersions#package_name}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_artifact_registry_versions#repository_id DataGoogleArtifactRegistryVersions#repository_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_artifact_registry_versions#filter DataGoogleArtifactRegistryVersions#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_artifact_registry_versions#id DataGoogleArtifactRegistryVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_artifact_registry_versions#project DataGoogleArtifactRegistryVersions#project}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsConfig.property.view"></a>

```typescript
public readonly view: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_artifact_registry_versions#view DataGoogleArtifactRegistryVersions#view}.

---

### DataGoogleArtifactRegistryVersionsVersions <a name="DataGoogleArtifactRegistryVersionsVersions" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersions.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryVersions } from '@cdktn/provider-google-beta'

const dataGoogleArtifactRegistryVersionsVersions: dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersions = { ... }
```


### DataGoogleArtifactRegistryVersionsVersionsRelatedTags <a name="DataGoogleArtifactRegistryVersionsVersionsRelatedTags" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTags.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryVersions } from '@cdktn/provider-google-beta'

const dataGoogleArtifactRegistryVersionsVersionsRelatedTags: dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryVersionsVersionsList <a name="DataGoogleArtifactRegistryVersionsVersionsList" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryVersions } from '@cdktn/provider-google-beta'

new dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.get"></a>

```typescript
public get(index: number): DataGoogleArtifactRegistryVersionsVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleArtifactRegistryVersionsVersionsOutputReference <a name="DataGoogleArtifactRegistryVersionsVersionsOutputReference" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryVersions } from '@cdktn/provider-google-beta'

new dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.annotations">annotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.relatedTags">relatedTags</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList">DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersions">DataGoogleArtifactRegistryVersionsVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.annotations"></a>

```typescript
public readonly annotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `relatedTags`<sup>Required</sup> <a name="relatedTags" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.relatedTags"></a>

```typescript
public readonly relatedTags: DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList">DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleArtifactRegistryVersionsVersions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersions">DataGoogleArtifactRegistryVersionsVersions</a>

---


### DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList <a name="DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryVersions } from '@cdktn/provider-google-beta'

new dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.get"></a>

```typescript
public get(index: number): DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference <a name="DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryVersions } from '@cdktn/provider-google-beta'

new dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTags">DataGoogleArtifactRegistryVersionsVersionsRelatedTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleArtifactRegistryVersionsVersionsRelatedTags;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleArtifactRegistryVersions.DataGoogleArtifactRegistryVersionsVersionsRelatedTags">DataGoogleArtifactRegistryVersionsVersionsRelatedTags</a>

---



