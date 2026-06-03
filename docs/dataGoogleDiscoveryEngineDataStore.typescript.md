# `dataGoogleDiscoveryEngineDataStore` Submodule <a name="`dataGoogleDiscoveryEngineDataStore` Submodule" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleDiscoveryEngineDataStore <a name="DataGoogleDiscoveryEngineDataStore" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_discovery_engine_data_store google_discovery_engine_data_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore(scope: Construct, id: string, config?: DataGoogleDiscoveryEngineDataStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig">DataGoogleDiscoveryEngineDataStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig">DataGoogleDiscoveryEngineDataStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.resetDataStoreId">resetDataStoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDataStoreId` <a name="resetDataStoreId" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.resetDataStoreId"></a>

```typescript
public resetDataStoreId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleDiscoveryEngineDataStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.isConstruct"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.isTerraformElement"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.isTerraformDataSource"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.generateConfigForImport"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleDiscoveryEngineDataStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleDiscoveryEngineDataStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleDiscoveryEngineDataStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_discovery_engine_data_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleDiscoveryEngineDataStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.advancedSiteSearchConfig">advancedSiteSearchConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList">DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.contentConfig">contentConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.createAdvancedSiteSearch">createAdvancedSiteSearch</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.defaultSchemaId">defaultSchemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.documentProcessingConfig">documentProcessingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.industryVertical">industryVertical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.skipDefaultSchemaCreation">skipDefaultSchemaCreation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.solutionTypes">solutionTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.dataStoreIdInput">dataStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.dataStoreId">dataStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `advancedSiteSearchConfig`<sup>Required</sup> <a name="advancedSiteSearchConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.advancedSiteSearchConfig"></a>

```typescript
public readonly advancedSiteSearchConfig: DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList">DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList</a>

---

##### `contentConfig`<sup>Required</sup> <a name="contentConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.contentConfig"></a>

```typescript
public readonly contentConfig: string;
```

- *Type:* string

---

##### `createAdvancedSiteSearch`<sup>Required</sup> <a name="createAdvancedSiteSearch" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.createAdvancedSiteSearch"></a>

```typescript
public readonly createAdvancedSiteSearch: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `defaultSchemaId`<sup>Required</sup> <a name="defaultSchemaId" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.defaultSchemaId"></a>

```typescript
public readonly defaultSchemaId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `documentProcessingConfig`<sup>Required</sup> <a name="documentProcessingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.documentProcessingConfig"></a>

```typescript
public readonly documentProcessingConfig: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList</a>

---

##### `industryVertical`<sup>Required</sup> <a name="industryVertical" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.industryVertical"></a>

```typescript
public readonly industryVertical: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `skipDefaultSchemaCreation`<sup>Required</sup> <a name="skipDefaultSchemaCreation" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.skipDefaultSchemaCreation"></a>

```typescript
public readonly skipDefaultSchemaCreation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `solutionTypes`<sup>Required</sup> <a name="solutionTypes" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.solutionTypes"></a>

```typescript
public readonly solutionTypes: string[];
```

- *Type:* string[]

---

##### `dataStoreIdInput`<sup>Optional</sup> <a name="dataStoreIdInput" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.dataStoreIdInput"></a>

```typescript
public readonly dataStoreIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `dataStoreId`<sup>Required</sup> <a name="dataStoreId" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.dataStoreId"></a>

```typescript
public readonly dataStoreId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig <a name="DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

const dataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig: dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig = { ... }
```


### DataGoogleDiscoveryEngineDataStoreConfig <a name="DataGoogleDiscoveryEngineDataStoreConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

const dataGoogleDiscoveryEngineDataStoreConfig: dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.dataStoreId">dataStoreId</a></code> | <code>string</code> | The unique id of the data store. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the data store. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_discovery_engine_data_store#id DataGoogleDiscoveryEngineDataStore#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_discovery_engine_data_store#project DataGoogleDiscoveryEngineDataStore#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataStoreId`<sup>Optional</sup> <a name="dataStoreId" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.dataStoreId"></a>

```typescript
public readonly dataStoreId: string;
```

- *Type:* string

The unique id of the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_discovery_engine_data_store#data_store_id DataGoogleDiscoveryEngineDataStore#data_store_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the data store.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_discovery_engine_data_store#display_name DataGoogleDiscoveryEngineDataStore#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_discovery_engine_data_store#id DataGoogleDiscoveryEngineDataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_discovery_engine_data_store#location DataGoogleDiscoveryEngineDataStore#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_discovery_engine_data_store#project DataGoogleDiscoveryEngineDataStore#project}.

---

### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfig <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfig.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

const dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfig: dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfig = { ... }
```


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

const dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig: dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig = { ... }
```


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

const dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig: dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig = { ... }
```


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

const dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig: dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig = { ... }
```


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

const dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig: dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig = { ... }
```


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

const dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig: dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig = { ... }
```


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

const dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig: dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig = { ... }
```


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

const dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides: dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides = { ... }
```


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

const dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig: dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig = { ... }
```


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

const dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig: dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig = { ... }
```


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

const dataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig: dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList <a name="DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference <a name="DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableAutomaticRefresh">disableAutomaticRefresh</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableInitialIndex">disableInitialIndex</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig">DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableAutomaticRefresh`<sup>Required</sup> <a name="disableAutomaticRefresh" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableAutomaticRefresh"></a>

```typescript
public readonly disableAutomaticRefresh: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `disableInitialIndex`<sup>Required</sup> <a name="disableInitialIndex" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.disableInitialIndex"></a>

```typescript
public readonly disableInitialIndex: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig">DataGoogleDiscoveryEngineDataStoreAdvancedSiteSearchConfig</a>

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.chunkSize">chunkSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.includeAncestorHeadings">includeAncestorHeadings</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chunkSize`<sup>Required</sup> <a name="chunkSize" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.chunkSize"></a>

```typescript
public readonly chunkSize: number;
```

- *Type:* number

---

##### `includeAncestorHeadings`<sup>Required</sup> <a name="includeAncestorHeadings" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.includeAncestorHeadings"></a>

```typescript
public readonly includeAncestorHeadings: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfig</a>

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.layoutBasedChunkingConfig">layoutBasedChunkingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `layoutBasedChunkingConfig`<sup>Required</sup> <a name="layoutBasedChunkingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.layoutBasedChunkingConfig"></a>

```typescript
public readonly layoutBasedChunkingConfig: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigLayoutBasedChunkingConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfig</a>

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfig</a>

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableImageAnnotation">enableImageAnnotation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableTableAnnotation">enableTableAnnotation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlClasses">excludeHtmlClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlElements">excludeHtmlElements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlIds">excludeHtmlIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.structuredContentTypes">structuredContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableImageAnnotation`<sup>Required</sup> <a name="enableImageAnnotation" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableImageAnnotation"></a>

```typescript
public readonly enableImageAnnotation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enableTableAnnotation`<sup>Required</sup> <a name="enableTableAnnotation" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.enableTableAnnotation"></a>

```typescript
public readonly enableTableAnnotation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `excludeHtmlClasses`<sup>Required</sup> <a name="excludeHtmlClasses" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlClasses"></a>

```typescript
public readonly excludeHtmlClasses: string[];
```

- *Type:* string[]

---

##### `excludeHtmlElements`<sup>Required</sup> <a name="excludeHtmlElements" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlElements"></a>

```typescript
public readonly excludeHtmlElements: string[];
```

- *Type:* string[]

---

##### `excludeHtmlIds`<sup>Required</sup> <a name="excludeHtmlIds" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.excludeHtmlIds"></a>

```typescript
public readonly excludeHtmlIds: string[];
```

- *Type:* string[]

---

##### `structuredContentTypes`<sup>Required</sup> <a name="structuredContentTypes" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.structuredContentTypes"></a>

```typescript
public readonly structuredContentTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfig</a>

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.useNativeText">useNativeText</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `useNativeText`<sup>Required</sup> <a name="useNativeText" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.useNativeText"></a>

```typescript
public readonly useNativeText: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfig</a>

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.digitalParsingConfig">digitalParsingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.layoutParsingConfig">layoutParsingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.ocrParsingConfig">ocrParsingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `digitalParsingConfig`<sup>Required</sup> <a name="digitalParsingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.digitalParsingConfig"></a>

```typescript
public readonly digitalParsingConfig: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigDigitalParsingConfigList</a>

---

##### `layoutParsingConfig`<sup>Required</sup> <a name="layoutParsingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.layoutParsingConfig"></a>

```typescript
public readonly layoutParsingConfig: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigLayoutParsingConfigList</a>

---

##### `ocrParsingConfig`<sup>Required</sup> <a name="ocrParsingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.ocrParsingConfig"></a>

```typescript
public readonly ocrParsingConfig: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOcrParsingConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfig</a>

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.chunkingConfig">chunkingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.defaultParsingConfig">defaultParsingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.parsingConfigOverrides">parsingConfigOverrides</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chunkingConfig`<sup>Required</sup> <a name="chunkingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.chunkingConfig"></a>

```typescript
public readonly chunkingConfig: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigChunkingConfigList</a>

---

##### `defaultParsingConfig`<sup>Required</sup> <a name="defaultParsingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.defaultParsingConfig"></a>

```typescript
public readonly defaultParsingConfig: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigDefaultParsingConfigList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parsingConfigOverrides`<sup>Required</sup> <a name="parsingConfigOverrides" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.parsingConfigOverrides"></a>

```typescript
public readonly parsingConfigOverrides: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfig</a>

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfig</a>

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableImageAnnotation">enableImageAnnotation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableTableAnnotation">enableTableAnnotation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlClasses">excludeHtmlClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlElements">excludeHtmlElements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlIds">excludeHtmlIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.structuredContentTypes">structuredContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableImageAnnotation`<sup>Required</sup> <a name="enableImageAnnotation" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableImageAnnotation"></a>

```typescript
public readonly enableImageAnnotation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enableTableAnnotation`<sup>Required</sup> <a name="enableTableAnnotation" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.enableTableAnnotation"></a>

```typescript
public readonly enableTableAnnotation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `excludeHtmlClasses`<sup>Required</sup> <a name="excludeHtmlClasses" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlClasses"></a>

```typescript
public readonly excludeHtmlClasses: string[];
```

- *Type:* string[]

---

##### `excludeHtmlElements`<sup>Required</sup> <a name="excludeHtmlElements" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlElements"></a>

```typescript
public readonly excludeHtmlElements: string[];
```

- *Type:* string[]

---

##### `excludeHtmlIds`<sup>Required</sup> <a name="excludeHtmlIds" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.excludeHtmlIds"></a>

```typescript
public readonly excludeHtmlIds: string[];
```

- *Type:* string[]

---

##### `structuredContentTypes`<sup>Required</sup> <a name="structuredContentTypes" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.structuredContentTypes"></a>

```typescript
public readonly structuredContentTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfig</a>

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.get"></a>

```typescript
public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.get"></a>

```typescript
public get(index: number): DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.useNativeText">useNativeText</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `useNativeText`<sup>Required</sup> <a name="useNativeText" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.useNativeText"></a>

```typescript
public readonly useNativeText: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfig</a>

---


### DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference <a name="DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer"></a>

```typescript
import { dataGoogleDiscoveryEngineDataStore } from '@cdktn/provider-google-beta'

new dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.digitalParsingConfig">digitalParsingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fileType">fileType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.layoutParsingConfig">layoutParsingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.ocrParsingConfig">ocrParsingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `digitalParsingConfig`<sup>Required</sup> <a name="digitalParsingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.digitalParsingConfig"></a>

```typescript
public readonly digitalParsingConfig: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesDigitalParsingConfigList</a>

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.fileType"></a>

```typescript
public readonly fileType: string;
```

- *Type:* string

---

##### `layoutParsingConfig`<sup>Required</sup> <a name="layoutParsingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.layoutParsingConfig"></a>

```typescript
public readonly layoutParsingConfig: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesLayoutParsingConfigList</a>

---

##### `ocrParsingConfig`<sup>Required</sup> <a name="ocrParsingConfig" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.ocrParsingConfig"></a>

```typescript
public readonly ocrParsingConfig: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOcrParsingConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleDiscoveryEngineDataStore.DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides">DataGoogleDiscoveryEngineDataStoreDocumentProcessingConfigParsingConfigOverrides</a>

---



