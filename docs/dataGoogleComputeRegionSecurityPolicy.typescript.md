# `dataGoogleComputeRegionSecurityPolicy` Submodule <a name="`dataGoogleComputeRegionSecurityPolicy` Submodule" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionSecurityPolicy <a name="DataGoogleComputeRegionSecurityPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_security_policy google_compute_region_security_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy(scope: Construct, id: string, config: DataGoogleComputeRegionSecurityPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig">DataGoogleComputeRegionSecurityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig">DataGoogleComputeRegionSecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeRegionSecurityPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isConstruct"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleComputeRegionSecurityPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeRegionSecurityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeRegionSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRegionSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.advancedOptionsConfig">advancedOptionsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.ddosProtectionConfig">ddosProtectionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList">DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList">DataGoogleComputeRegionSecurityPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.selfLinkWithPolicyId">selfLinkWithPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.userDefinedFields">userDefinedFields</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList">DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `advancedOptionsConfig`<sup>Required</sup> <a name="advancedOptionsConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.advancedOptionsConfig"></a>

```typescript
public readonly advancedOptionsConfig: DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList</a>

---

##### `ddosProtectionConfig`<sup>Required</sup> <a name="ddosProtectionConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.ddosProtectionConfig"></a>

```typescript
public readonly ddosProtectionConfig: DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList">DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.rules"></a>

```typescript
public readonly rules: DataGoogleComputeRegionSecurityPolicyRulesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList">DataGoogleComputeRegionSecurityPolicyRulesList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `selfLinkWithPolicyId`<sup>Required</sup> <a name="selfLinkWithPolicyId" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.selfLinkWithPolicyId"></a>

```typescript
public readonly selfLinkWithPolicyId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userDefinedFields`<sup>Required</sup> <a name="userDefinedFields" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.userDefinedFields"></a>

```typescript
public readonly userDefinedFields: DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList">DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig <a name="DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig = { ... }
```


### DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig <a name="DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig = { ... }
```


### DataGoogleComputeRegionSecurityPolicyConfig <a name="DataGoogleComputeRegionSecurityPolicyConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyConfig: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_security_policy#id DataGoogleComputeRegionSecurityPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_security_policy#project DataGoogleComputeRegionSecurityPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.region">region</a></code> | <code>string</code> | The Region in which the created Region Security Policy should reside. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_security_policy#name DataGoogleComputeRegionSecurityPolicy#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_security_policy#id DataGoogleComputeRegionSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_security_policy#project DataGoogleComputeRegionSecurityPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The Region in which the created Region Security Policy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_compute_region_security_policy#region DataGoogleComputeRegionSecurityPolicy#region}

---

### DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig <a name="DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyDdosProtectionConfig: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig = { ... }
```


### DataGoogleComputeRegionSecurityPolicyRules <a name="DataGoogleComputeRegionSecurityPolicyRules" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRules.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyRules: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRules = { ... }
```


### DataGoogleComputeRegionSecurityPolicyRulesMatch <a name="DataGoogleComputeRegionSecurityPolicyRulesMatch" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatch.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyRulesMatch: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatch = { ... }
```


### DataGoogleComputeRegionSecurityPolicyRulesMatchConfig <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfig.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyRulesMatchConfig: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfig = { ... }
```


### DataGoogleComputeRegionSecurityPolicyRulesMatchExpr <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchExpr" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExpr.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyRulesMatchExpr: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExpr = { ... }
```


### DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch <a name="DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyRulesNetworkMatch: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch = { ... }
```


### DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields <a name="DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields = { ... }
```


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig = { ... }
```


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion = { ... }
```


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie = { ... }
```


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader = { ... }
```


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam = { ... }
```


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri = { ... }
```


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions = { ... }
```


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold = { ... }
```


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs = { ... }
```


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold = { ... }
```


### DataGoogleComputeRegionSecurityPolicyUserDefinedFields <a name="DataGoogleComputeRegionSecurityPolicyUserDefinedFields" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFields.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

const dataGoogleComputeRegionSecurityPolicyUserDefinedFields: dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFields = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList <a name="DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference <a name="DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes">contentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentTypes`<sup>Required</sup> <a name="contentTypes" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes"></a>

```typescript
public readonly contentTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---


### DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList <a name="DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference <a name="DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig">jsonCustomConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing">jsonParsing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSize">requestBodyInspectionSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders">userIpRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonCustomConfig`<sup>Required</sup> <a name="jsonCustomConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig"></a>

```typescript
public readonly jsonCustomConfig: DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList</a>

---

##### `jsonParsing`<sup>Required</sup> <a name="jsonParsing" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing"></a>

```typescript
public readonly jsonParsing: string;
```

- *Type:* string

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `requestBodyInspectionSize`<sup>Required</sup> <a name="requestBodyInspectionSize" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSize"></a>

```typescript
public readonly requestBodyInspectionSize: string;
```

- *Type:* string

---

##### `userIpRequestHeaders`<sup>Required</sup> <a name="userIpRequestHeaders" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders"></a>

```typescript
public readonly userIpRequestHeaders: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig">DataGoogleComputeRegionSecurityPolicyAdvancedOptionsConfig</a>

---


### DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList <a name="DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference <a name="DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtection">ddosProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig">DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ddosProtection`<sup>Required</sup> <a name="ddosProtection" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtection"></a>

```typescript
public readonly ddosProtection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig">DataGoogleComputeRegionSecurityPolicyDdosProtectionConfig</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesList <a name="DataGoogleComputeRegionSecurityPolicyRulesList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfig">DataGoogleComputeRegionSecurityPolicyRulesMatchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyRulesMatchConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfig">DataGoogleComputeRegionSecurityPolicyRulesMatchConfig</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesMatchExprList <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchExprList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExpr">DataGoogleComputeRegionSecurityPolicyRulesMatchExpr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyRulesMatchExpr;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExpr">DataGoogleComputeRegionSecurityPolicyRulesMatchExpr</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesMatchList <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList">DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.expr">expr</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList">DataGoogleComputeRegionSecurityPolicyRulesMatchExprList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExpr">versionedExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatch">DataGoogleComputeRegionSecurityPolicyRulesMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.config"></a>

```typescript
public readonly config: DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList">DataGoogleComputeRegionSecurityPolicyRulesMatchConfigList</a>

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.expr"></a>

```typescript
public readonly expr: DataGoogleComputeRegionSecurityPolicyRulesMatchExprList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchExprList">DataGoogleComputeRegionSecurityPolicyRulesMatchExprList</a>

---

##### `versionedExpr`<sup>Required</sup> <a name="versionedExpr" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExpr"></a>

```typescript
public readonly versionedExpr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyRulesMatch;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatch">DataGoogleComputeRegionSecurityPolicyRulesMatch</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList <a name="DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRanges">destIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPorts">destPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocols">ipProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsns">srcAsns</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPorts">srcPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodes">srcRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFields">userDefinedFields</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destIpRanges`<sup>Required</sup> <a name="destIpRanges" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRanges"></a>

```typescript
public readonly destIpRanges: string[];
```

- *Type:* string[]

---

##### `destPorts`<sup>Required</sup> <a name="destPorts" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPorts"></a>

```typescript
public readonly destPorts: string[];
```

- *Type:* string[]

---

##### `ipProtocols`<sup>Required</sup> <a name="ipProtocols" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocols"></a>

```typescript
public readonly ipProtocols: string[];
```

- *Type:* string[]

---

##### `srcAsns`<sup>Required</sup> <a name="srcAsns" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsns"></a>

```typescript
public readonly srcAsns: number[];
```

- *Type:* number[]

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

---

##### `srcPorts`<sup>Required</sup> <a name="srcPorts" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPorts"></a>

```typescript
public readonly srcPorts: string[];
```

- *Type:* string[]

---

##### `srcRegionCodes`<sup>Required</sup> <a name="srcRegionCodes" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodes"></a>

```typescript
public readonly srcRegionCodes: string[];
```

- *Type:* string[]

---

##### `userDefinedFields`<sup>Required</sup> <a name="userDefinedFields" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFields"></a>

```typescript
public readonly userDefinedFields: DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatch</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList <a name="DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList">DataGoogleComputeRegionSecurityPolicyRulesMatchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.networkMatch">networkMatch</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfig">preconfiguredWafConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.preview">preview</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptions">rateLimitOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRules">DataGoogleComputeRegionSecurityPolicyRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.match"></a>

```typescript
public readonly match: DataGoogleComputeRegionSecurityPolicyRulesMatchList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesMatchList">DataGoogleComputeRegionSecurityPolicyRulesMatchList</a>

---

##### `networkMatch`<sup>Required</sup> <a name="networkMatch" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.networkMatch"></a>

```typescript
public readonly networkMatch: DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList">DataGoogleComputeRegionSecurityPolicyRulesNetworkMatchList</a>

---

##### `preconfiguredWafConfig`<sup>Required</sup> <a name="preconfiguredWafConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfig"></a>

```typescript
public readonly preconfiguredWafConfig: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList</a>

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.preview"></a>

```typescript
public readonly preview: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `rateLimitOptions`<sup>Required</sup> <a name="rateLimitOptions" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptions"></a>

```typescript
public readonly rateLimitOptions: DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyRules;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRules">DataGoogleComputeRegionSecurityPolicyRules</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookie">requestCookie</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeader">requestHeader</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">requestQueryParam</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUri">requestUri</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">targetRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">targetRuleSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestCookie`<sup>Required</sup> <a name="requestCookie" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```typescript
public readonly requestCookie: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `requestHeader`<sup>Required</sup> <a name="requestHeader" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```typescript
public readonly requestHeader: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `requestQueryParam`<sup>Required</sup> <a name="requestQueryParam" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```typescript
public readonly requestQueryParam: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `requestUri`<sup>Required</sup> <a name="requestUri" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```typescript
public readonly requestUri: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `targetRuleIds`<sup>Required</sup> <a name="targetRuleIds" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```typescript
public readonly targetRuleIds: string[];
```

- *Type:* string[]

---

##### `targetRuleSet`<sup>Required</sup> <a name="targetRuleSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```typescript
public readonly targetRuleSet: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusion"></a>

```typescript
public readonly exclusion: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">DataGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSec">intervalSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `intervalSec`<sup>Required</sup> <a name="intervalSec" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSec"></a>

```typescript
public readonly intervalSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName">enforceOnKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType">enforceOnKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforceOnKeyName`<sup>Required</sup> <a name="enforceOnKeyName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName"></a>

```typescript
public readonly enforceOnKeyName: string;
```

- *Type:* string

---

##### `enforceOnKeyType`<sup>Required</sup> <a name="enforceOnKeyType" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType"></a>

```typescript
public readonly enforceOnKeyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSec">banDurationSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThreshold">banThreshold</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformAction">conformAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKey">enforceOnKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigs">enforceOnKeyConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyName">enforceOnKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedAction">exceedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThreshold">rateLimitThreshold</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `banDurationSec`<sup>Required</sup> <a name="banDurationSec" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSec"></a>

```typescript
public readonly banDurationSec: number;
```

- *Type:* number

---

##### `banThreshold`<sup>Required</sup> <a name="banThreshold" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThreshold"></a>

```typescript
public readonly banThreshold: DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdList</a>

---

##### `conformAction`<sup>Required</sup> <a name="conformAction" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformAction"></a>

```typescript
public readonly conformAction: string;
```

- *Type:* string

---

##### `enforceOnKey`<sup>Required</sup> <a name="enforceOnKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKey"></a>

```typescript
public readonly enforceOnKey: string;
```

- *Type:* string

---

##### `enforceOnKeyConfigs`<sup>Required</sup> <a name="enforceOnKeyConfigs" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigs"></a>

```typescript
public readonly enforceOnKeyConfigs: DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList</a>

---

##### `enforceOnKeyName`<sup>Required</sup> <a name="enforceOnKeyName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyName"></a>

```typescript
public readonly enforceOnKeyName: string;
```

- *Type:* string

---

##### `exceedAction`<sup>Required</sup> <a name="exceedAction" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedAction"></a>

```typescript
public readonly exceedAction: string;
```

- *Type:* string

---

##### `rateLimitThreshold`<sup>Required</sup> <a name="rateLimitThreshold" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThreshold"></a>

```typescript
public readonly rateLimitThreshold: DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a>

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference <a name="DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec">intervalSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `intervalSec`<sup>Required</sup> <a name="intervalSec" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec"></a>

```typescript
public readonly intervalSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">DataGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

---


### DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList <a name="DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference <a name="DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionSecurityPolicy } from '@cdktn/provider-google-beta'

new dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.base">base</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.mask">mask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offset">offset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFields">DataGoogleComputeRegionSecurityPolicyUserDefinedFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.base"></a>

```typescript
public readonly base: string;
```

- *Type:* string

---

##### `mask`<sup>Required</sup> <a name="mask" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.mask"></a>

```typescript
public readonly mask: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offset"></a>

```typescript
public readonly offset: number;
```

- *Type:* number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionSecurityPolicyUserDefinedFields;
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionSecurityPolicy.DataGoogleComputeRegionSecurityPolicyUserDefinedFields">DataGoogleComputeRegionSecurityPolicyUserDefinedFields</a>

---



