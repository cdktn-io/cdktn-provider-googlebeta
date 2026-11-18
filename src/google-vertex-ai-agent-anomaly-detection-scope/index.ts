/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_vertex_ai_agent_anomaly_detection_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GoogleVertexAiAgentAnomalyDetectionScopeConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID to use for the AgentAnomalyDetectionScope, which will become the
  * final component of the scope's resource name. This value should be 1-63
  * characters and valid characters are /[a-z][0-9]-/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#agent_anomaly_detection_scope_id GoogleVertexAiAgentAnomalyDetectionScope#agent_anomaly_detection_scope_id}
  */
  readonly agentAnomalyDetectionScopeId: string;
  /**
  * When true, newly discovered agents that share log and observability
  * buckets with this scope are automatically enrolled as ACTIVE monitored
  * agents, up to the project's monitored agent quota. When false, newly
  * discovered agents are added as DISABLED monitored agents and must be
  * enabled explicitly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#auto_enroll GoogleVertexAiAgentAnomalyDetectionScope#auto_enroll}
  */
  readonly autoEnroll?: boolean | cdktn.IResolvable;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#deletion_policy GoogleVertexAiAgentAnomalyDetectionScope#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * User provided display name of the AgentAnomalyDetectionScope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#display_name GoogleVertexAiAgentAnomalyDetectionScope#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#id GoogleVertexAiAgentAnomalyDetectionScope#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customer owned Cloud Logging bucket resource names attached to this scope.
  * Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#log_buckets GoogleVertexAiAgentAnomalyDetectionScope#log_buckets}
  */
  readonly logBuckets: string[];
  /**
  * Customer owned Cloud Observability bucket resource names attached to this
  * scope.
  * Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}/datasets/{{dataset}}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#observability_buckets GoogleVertexAiAgentAnomalyDetectionScope#observability_buckets}
  */
  readonly observabilityBuckets: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#project GoogleVertexAiAgentAnomalyDetectionScope#project}
  */
  readonly project?: string;
  /**
  * The region of the AgentAnomalyDetectionScope, e.g. us-central1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#region GoogleVertexAiAgentAnomalyDetectionScope#region}
  */
  readonly region: string;
  /**
  * encryption_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#encryption_spec GoogleVertexAiAgentAnomalyDetectionScope#encryption_spec}
  */
  readonly encryptionSpec?: GoogleVertexAiAgentAnomalyDetectionScopeEncryptionSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#timeouts GoogleVertexAiAgentAnomalyDetectionScope#timeouts}
  */
  readonly timeouts?: GoogleVertexAiAgentAnomalyDetectionScopeTimeouts;
}
export interface GoogleVertexAiAgentAnomalyDetectionScopeEncryptionSpec {
  /**
  * Resource name of the Cloud KMS key used to protect the resource.
  * Format: projects/{{project}}/locations/{{location}}/keyRings/{{key_ring}}/cryptoKeys/{{crypto_key}}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#kms_key_name GoogleVertexAiAgentAnomalyDetectionScope#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function googleVertexAiAgentAnomalyDetectionScopeEncryptionSpecToTerraform(struct?: GoogleVertexAiAgentAnomalyDetectionScopeEncryptionSpecOutputReference | GoogleVertexAiAgentAnomalyDetectionScopeEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    kms_key_name: cdktn.stringToTerraform(struct!.kmsKeyName),
  }
}


export function googleVertexAiAgentAnomalyDetectionScopeEncryptionSpecToHclTerraform(struct?: GoogleVertexAiAgentAnomalyDetectionScopeEncryptionSpecOutputReference | GoogleVertexAiAgentAnomalyDetectionScopeEncryptionSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    kms_key_name: {
      value: cdktn.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiAgentAnomalyDetectionScopeEncryptionSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiAgentAnomalyDetectionScopeEncryptionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiAgentAnomalyDetectionScopeEncryptionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface GoogleVertexAiAgentAnomalyDetectionScopeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#create GoogleVertexAiAgentAnomalyDetectionScope#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#delete GoogleVertexAiAgentAnomalyDetectionScope#delete}
  */
  readonly delete?: string;
}

export function googleVertexAiAgentAnomalyDetectionScopeTimeoutsToTerraform(struct?: GoogleVertexAiAgentAnomalyDetectionScopeTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function googleVertexAiAgentAnomalyDetectionScopeTimeoutsToHclTerraform(struct?: GoogleVertexAiAgentAnomalyDetectionScopeTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleVertexAiAgentAnomalyDetectionScopeTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiAgentAnomalyDetectionScopeTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_vertex_ai_agent_anomaly_detection_scope google_vertex_ai_agent_anomaly_detection_scope}
*/
export class GoogleVertexAiAgentAnomalyDetectionScope extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_agent_anomaly_detection_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GoogleVertexAiAgentAnomalyDetectionScope resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleVertexAiAgentAnomalyDetectionScope to import
  * @param importFromId The id of the existing GoogleVertexAiAgentAnomalyDetectionScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleVertexAiAgentAnomalyDetectionScope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_agent_anomaly_detection_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.12.0/docs/resources/google_vertex_ai_agent_anomaly_detection_scope google_vertex_ai_agent_anomaly_detection_scope} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVertexAiAgentAnomalyDetectionScopeConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleVertexAiAgentAnomalyDetectionScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_agent_anomaly_detection_scope',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '8.12.0',
        providerVersionConstraint: '~> 8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentAnomalyDetectionScopeId = config.agentAnomalyDetectionScopeId;
    this._autoEnroll = config.autoEnroll;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._logBuckets = config.logBuckets;
    this._observabilityBuckets = config.observabilityBuckets;
    this._project = config.project;
    this._region = config.region;
    this._encryptionSpec.internalValue = config.encryptionSpec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_anomaly_detection_scope_id - computed: false, optional: false, required: true
  private _agentAnomalyDetectionScopeId?: string; 
  public get agentAnomalyDetectionScopeId() {
    return this.getStringAttribute('agent_anomaly_detection_scope_id');
  }
  public set agentAnomalyDetectionScopeId(value: string) {
    this._agentAnomalyDetectionScopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentAnomalyDetectionScopeIdInput() {
    return this._agentAnomalyDetectionScopeId;
  }

  // auto_enroll - computed: false, optional: true, required: false
  private _autoEnroll?: boolean | cdktn.IResolvable; 
  public get autoEnroll() {
    return this.getBooleanAttribute('auto_enroll');
  }
  public set autoEnroll(value: boolean | cdktn.IResolvable) {
    this._autoEnroll = value;
  }
  public resetAutoEnroll() {
    this._autoEnroll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnrollInput() {
    return this._autoEnroll;
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // log_buckets - computed: false, optional: false, required: true
  private _logBuckets?: string[]; 
  public get logBuckets() {
    return this.getListAttribute('log_buckets');
  }
  public set logBuckets(value: string[]) {
    this._logBuckets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logBucketsInput() {
    return this._logBuckets;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // observability_buckets - computed: false, optional: false, required: true
  private _observabilityBuckets?: string[]; 
  public get observabilityBuckets() {
    return this.getListAttribute('observability_buckets');
  }
  public set observabilityBuckets(value: string[]) {
    this._observabilityBuckets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityBucketsInput() {
    return this._observabilityBuckets;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec = new GoogleVertexAiAgentAnomalyDetectionScopeEncryptionSpecOutputReference(this, "encryption_spec");
  public get encryptionSpec() {
    return this._encryptionSpec;
  }
  public putEncryptionSpec(value: GoogleVertexAiAgentAnomalyDetectionScopeEncryptionSpec) {
    this._encryptionSpec.internalValue = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVertexAiAgentAnomalyDetectionScopeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_anomaly_detection_scope_id: cdktn.stringToTerraform(this._agentAnomalyDetectionScopeId),
      auto_enroll: cdktn.booleanToTerraform(this._autoEnroll),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      log_buckets: cdktn.listMapper(cdktn.stringToTerraform, false)(this._logBuckets),
      observability_buckets: cdktn.listMapper(cdktn.stringToTerraform, false)(this._observabilityBuckets),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      encryption_spec: googleVertexAiAgentAnomalyDetectionScopeEncryptionSpecToTerraform(this._encryptionSpec.internalValue),
      timeouts: googleVertexAiAgentAnomalyDetectionScopeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_anomaly_detection_scope_id: {
        value: cdktn.stringToHclTerraform(this._agentAnomalyDetectionScopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_enroll: {
        value: cdktn.booleanToHclTerraform(this._autoEnroll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_buckets: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._logBuckets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      observability_buckets: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._observabilityBuckets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_spec: {
        value: googleVertexAiAgentAnomalyDetectionScopeEncryptionSpecToHclTerraform(this._encryptionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiAgentAnomalyDetectionScopeEncryptionSpecList",
      },
      timeouts: {
        value: googleVertexAiAgentAnomalyDetectionScopeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleVertexAiAgentAnomalyDetectionScopeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
