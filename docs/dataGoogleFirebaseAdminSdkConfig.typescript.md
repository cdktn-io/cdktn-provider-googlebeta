# `dataGoogleFirebaseAdminSdkConfig` Submodule <a name="`dataGoogleFirebaseAdminSdkConfig` Submodule" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleFirebaseAdminSdkConfig <a name="DataGoogleFirebaseAdminSdkConfig" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_firebase_admin_sdk_config google_firebase_admin_sdk_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.Initializer"></a>

```typescript
import { dataGoogleFirebaseAdminSdkConfig } from '@cdktn/provider-google-beta'

new dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig(scope: Construct, id: string, config?: DataGoogleFirebaseAdminSdkConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig">DataGoogleFirebaseAdminSdkConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig">DataGoogleFirebaseAdminSdkConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleFirebaseAdminSdkConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.isConstruct"></a>

```typescript
import { dataGoogleFirebaseAdminSdkConfig } from '@cdktn/provider-google-beta'

dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.isTerraformElement"></a>

```typescript
import { dataGoogleFirebaseAdminSdkConfig } from '@cdktn/provider-google-beta'

dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.isTerraformDataSource"></a>

```typescript
import { dataGoogleFirebaseAdminSdkConfig } from '@cdktn/provider-google-beta'

dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.generateConfigForImport"></a>

```typescript
import { dataGoogleFirebaseAdminSdkConfig } from '@cdktn/provider-google-beta'

dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleFirebaseAdminSdkConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleFirebaseAdminSdkConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleFirebaseAdminSdkConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_firebase_admin_sdk_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleFirebaseAdminSdkConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.databaseUrl">databaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.locationId">locationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.storageBucket">storageBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `databaseUrl`<sup>Required</sup> <a name="databaseUrl" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.databaseUrl"></a>

```typescript
public readonly databaseUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationId`<sup>Required</sup> <a name="locationId" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.locationId"></a>

```typescript
public readonly locationId: string;
```

- *Type:* string

---

##### `storageBucket`<sup>Required</sup> <a name="storageBucket" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.storageBucket"></a>

```typescript
public readonly storageBucket: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleFirebaseAdminSdkConfigConfig <a name="DataGoogleFirebaseAdminSdkConfigConfig" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig.Initializer"></a>

```typescript
import { dataGoogleFirebaseAdminSdkConfig } from '@cdktn/provider-google-beta'

const dataGoogleFirebaseAdminSdkConfigConfig: dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleFirebaseAdminSdkConfig.DataGoogleFirebaseAdminSdkConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/data-sources/google_firebase_admin_sdk_config#project DataGoogleFirebaseAdminSdkConfig#project}

---



